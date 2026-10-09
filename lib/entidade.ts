// Fonte ÚNICA dos dados da clínica para dados estruturados (JSON-LD), llms.txt e blocos "onde fica".
// Regra: tudo aqui tem de ser IGUAL ao Perfil da Empresa no Google (Maps) e ao Instagram. Quando um
// dado mudar lá, mude aqui. Conferido com o Maps em 09/10/2026.
export const SITE = 'https://isabelaragao.com.br'

export const CLINICA = {
  id: `${SITE}/#clinica`,
  nome: 'Isabel Aragão | Saúde e Emagrecimento', // nome exato do Perfil da Empresa no Google
  nomeAlternativo: 'Dra. Isabel Aragão, Médica Especialista em Emagrecimento',
  telefoneE164: '+5548991593468',
  telefoneBonito: '(48) 99159-3468',
  whatsapp: 'https://wa.me/5548991593468',
  rua: 'Av. Mal. Castelo Branco, 65, Sala 1102 B, Kennedy Towers',
  bairro: 'Campinas',
  cidade: 'São José',
  uf: 'SC',
  cep: '88101-020',
  lat: -27.6000899,
  lng: -48.6093224,
  mapsUrl: 'https://maps.google.com/?cid=12061819971878830027',
  // seg a sex, 8h às 18h (sáb e dom fechado), igual ao Maps
  horario: { dias: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], abre: '08:00', fecha: '18:00' },
  horarioTexto: 'segunda a sexta, das 8h às 18h',
  cidadesAtendidas: ['São José', 'Florianópolis', 'Palhoça', 'Biguaçu'],
  instagram: 'https://www.instagram.com/dra.isabelaragao/',
  doctoralia: 'https://www.doctoralia.com.br/isabel-aragao/medico-clinico-geral/florianopolis',
}

export const MEDICA = {
  id: `${SITE}/#dra-isabel`,
  nome: 'Dra. Isabel Aragão',
  cargo: 'Médica especialista em emagrecimento',
  crm: 'CRM-SC 26139',
  formacao: 'Hospital Israelita Albert Einstein',
  temas: ['emagrecimento', 'obesidade', 'bioimpedância', 'tirzepatida', 'semaglutida', 'medicamentos injetáveis para emagrecer', 'lipedema'],
}

export const ENFERMEIRA = {
  nome: 'Enf. Maria Fernanda Loccioni',
  cargo: 'Enfermeira',
  coren: 'COREN/SC 441029',
}

/** JSON-LD completo (grafo): clínica + médica + enfermeira, com os mesmos dados do Maps. */
export function jsonLdClinica() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['MedicalClinic', 'LocalBusiness'],
        '@id': CLINICA.id,
        name: CLINICA.nome,
        alternateName: CLINICA.nomeAlternativo,
        url: SITE,
        telephone: CLINICA.telefoneE164,
        image: `${SITE}/images/hero.jpg`,
        logo: `${SITE}/icon.png`,
        priceRange: '$$',
        description:
          'Clínica médica de emagrecimento em São José/SC (Grande Florianópolis). Consulta com médica, bioimpedância, plano individualizado e tratamento com medicamentos injetáveis sob prescrição e acompanhamento. Atendimento presencial e online.',
        address: {
          '@type': 'PostalAddress',
          streetAddress: `${CLINICA.rua}, ${CLINICA.bairro}`,
          addressLocality: CLINICA.cidade,
          addressRegion: CLINICA.uf,
          postalCode: CLINICA.cep,
          addressCountry: 'BR',
        },
        geo: { '@type': 'GeoCoordinates', latitude: CLINICA.lat, longitude: CLINICA.lng },
        hasMap: CLINICA.mapsUrl,
        openingHoursSpecification: [
          { '@type': 'OpeningHoursSpecification', dayOfWeek: CLINICA.horario.dias, opens: CLINICA.horario.abre, closes: CLINICA.horario.fecha },
        ],
        areaServed: [...CLINICA.cidadesAtendidas.map((c) => ({ '@type': 'City', name: c })), { '@type': 'Country', name: 'Brasil' }],
        availableService: [
          { '@type': 'MedicalProcedure', name: 'Consulta médica de emagrecimento (90 minutos)' },
          { '@type': 'MedicalTest', name: 'Bioimpedância (composição corporal)' },
          { '@type': 'MedicalTherapy', name: 'Tratamento com medicamentos injetáveis sob prescrição e acompanhamento' },
          { '@type': 'MedicalProcedure', name: 'Aplicação de medicamento injetável na clínica, com enfermeira' },
        ],
        founder: { '@id': MEDICA.id },
        employee: [{ '@id': MEDICA.id }, { '@type': 'Person', name: ENFERMEIRA.nome, jobTitle: ENFERMEIRA.cargo, identifier: ENFERMEIRA.coren }],
        sameAs: [CLINICA.instagram, CLINICA.mapsUrl, CLINICA.doctoralia],
        contactPoint: { '@type': 'ContactPoint', telephone: CLINICA.telefoneE164, contactType: 'agendamento', url: CLINICA.whatsapp, availableLanguage: 'pt-BR' },
      },
      {
        '@type': ['Person', 'Physician'],
        '@id': MEDICA.id,
        name: MEDICA.nome,
        givenName: 'Isabel',
        familyName: 'Aragão',
        honorificPrefix: 'Dra.',
        jobTitle: MEDICA.cargo,
        description: `Médica em São José/SC dedicada ao tratamento do excesso de peso e da obesidade. ${MEDICA.crm}.`,
        identifier: { '@type': 'PropertyValue', propertyID: 'CRM-SC', value: '26139' },
        alumniOf: { '@type': 'EducationalOrganization', name: MEDICA.formacao },
        knowsAbout: MEDICA.temas,
        worksFor: { '@id': CLINICA.id },
        workLocation: { '@id': CLINICA.id },
        url: SITE,
        image: `${SITE}/images/hero.jpg`,
        sameAs: [CLINICA.instagram, CLINICA.doctoralia],
      },
    ],
  }
}
