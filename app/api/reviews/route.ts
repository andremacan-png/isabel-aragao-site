const mockReviews = [
  {
    author_name: "Ana Paula S.",
    rating: 5,
    text: "A Dra. Isabel é incrível! Finalmente encontrei uma médica que realmente escuta e entende minha história. Emagreci 12kg em 4 meses com saúde e sem passar fome.",
    relative_time_description: "há 2 semanas",
  },
  {
    author_name: "Fernanda M.",
    rating: 5,
    text: "Atendimento humanizado e muito profissional. Ela explica tudo com detalhes e o plano é realmente personalizado. Recomendo de olhos fechados!",
    relative_time_description: "há 1 mês",
  },
  {
    author_name: "Carla R.",
    rating: 5,
    text: "Depois de anos tentando emagrecer sem sucesso, com a Dra. Isabel entendi o que estava errado. O método dela é diferente de tudo que já fiz.",
    relative_time_description: "há 3 semanas",
  },
  {
    author_name: "Juliana T.",
    rating: 5,
    text: "Profissional excepcional! Muito atenciosa, didática e comprometida com o resultado do paciente. A clínica é linda e o ambiente acolhedor.",
    relative_time_description: "há 1 semana",
  },
  {
    author_name: "Marcos V.",
    rating: 5,
    text: "Minha esposa indicou e não me arrependo. Tratamento sério, baseado em exames e ciência. Já perdi 8kg e me sinto com muito mais energia.",
    relative_time_description: "há 2 meses",
  },
];

export async function GET() {
  const PLACE_ID = process.env.GOOGLE_PLACE_ID || "PLACEHOLDER_ID";
  const API_KEY = process.env.GOOGLE_MAPS_API_KEY || "";

  if (!API_KEY || API_KEY === "") {
    return Response.json({ reviews: mockReviews });
  }

  const res = await fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews,rating,user_ratings_total&language=pt-BR&key=${API_KEY}`,
  );
  const data = await res.json();
  return Response.json({
    reviews: data.result?.reviews || mockReviews,
    rating: data.result?.rating,
    total: data.result?.user_ratings_total,
  });
}
