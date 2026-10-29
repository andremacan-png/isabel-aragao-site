import { test } from 'vitest'
import assert from 'node:assert/strict'
import { imc, classificacaoImc, pctNaSemana, projetar, marcos, doseNaSemana, posicao, fracaoReganho, projetarParada, curvasDe } from '../lib/simulador/motor'

const tirze10 = curvasDe('tirzepatida').find((c) => c.id === 'tirze-10')!
const sema = curvasDe('semaglutida')[0]

test('IMC e classificação', () => {
  assert.equal(Math.round(imc(98, 166) * 10) / 10, 35.6)
  assert.equal(classificacaoImc(35.6), 'obesidade grau 2')
  assert.equal(classificacaoImc(27), 'sobrepeso')
})

test('desfechos publicados batem na semana 72/68', () => {
  assert.equal(pctNaSemana(curvasDe('tirzepatida').find((c) => c.id === 'tirze-5')!, 72), -15.0)
  assert.equal(pctNaSemana(tirze10, 72), -19.5)
  assert.equal(pctNaSemana(curvasDe('tirzepatida').find((c) => c.id === 'tirze-15')!, 72), -20.9)
  assert.equal(pctNaSemana(sema, 68), -14.9)
})

test('interpolação é monotônica e começa em zero', () => {
  const p = projetar(100, tirze10)
  assert.equal(p[0].pct, 0)
  for (let i = 1; i < p.length; i++) assert.ok(p[i].pct <= p[i - 1].pct + 1e-9, `semana ${i}`)
  assert.equal(Math.round(p[72].pesoKg * 10) / 10, 80.5)
})

test('marcos com três cenários para 100 kg em 10 mg', () => {
  const m = marcos(100, tirze10)
  const s72 = m.find((x) => x.semana === 72)!
  assert.equal(Math.round(s72.media.perdaKg * 10) / 10, 19.5)
  assert.equal(Math.round(s72.bom.perdaKg * 100) / 100, 24.38)
  assert.equal(Math.round(s72.baixo.perdaKg * 100) / 100, 14.63)
})

test('esquema de dose pela bula', () => {
  assert.equal(doseNaSemana(tirze10, 1), 2.5)
  assert.equal(doseNaSemana(tirze10, 4), 2.5)
  assert.equal(doseNaSemana(tirze10, 5), 5)
  assert.equal(doseNaSemana(tirze10, 13), 10)
  assert.equal(doseNaSemana(tirze10, 40), 10)
  assert.equal(doseNaSemana(sema, 17), 2.4)
})

test('posição na curva', () => {
  assert.equal(posicao(100, 98, 4, tirze10).faixa, 'cedo')
  const dentro = posicao(100, 93.2, 12, tirze10) // média -6,8%
  assert.equal(dentro.faixa, 'dentro')
  assert.equal(dentro.precoce, true)
  assert.equal(posicao(100, 90, 12, tirze10).faixa, 'acima')
  assert.equal(posicao(100, 97, 12, tirze10).faixa, 'abaixo')
  assert.equal(posicao(100, 97, 12, tirze10).precoce, false)
})

test('reganho: 2/3 do perdido em 52 semanas, côncavo', () => {
  assert.equal(fracaoReganho(0), 0)
  assert.ok(Math.abs(fracaoReganho(52) - 2 / 3) < 1e-9)
  assert.ok(fracaoReganho(12) > (2 / 3) * (12 / 52))
  const p = projetarParada(100, tirze10, 72)
  assert.equal(Math.round(p[72].pesoKg * 10) / 10, 80.5)
  assert.equal(Math.round(p[124].pesoKg * 10) / 10, 93.5)
})
