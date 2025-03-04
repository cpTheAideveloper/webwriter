import OpenAI from "openai";
export const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function requestChatCompletion(messages: { role: string; content: string }[]) {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `Eres un asistente que genera contenido para páginas web. Devuelve el resultado en el siguiente JSON: {
            "hero": {
              "title": "Título generado",
              "description": "Descripción breve",
              "cta": "Texto para el botón"
            },
            "features": [
              {
                "featureTitle": "Característica 1",
                "featureDescription": "Descripción breve de la característica 1"
              },
              {
                "featureTitle": "Característica 2",
                "featureDescription": "Descripción breve de la característica 2"
              },
              {
                "featureTitle": "Característica 3",
                "featureDescription": "Descripción breve de la característica 3"
              }
            ],
            "services": [
              {
                "serviceTitle": "Servicio 1",
                "serviceDescription": "Descripción del servicio 1"
              },
              {
                "serviceTitle": "Servicio 2",
                "serviceDescription": "Descripción del servicio 2"
              }
            ],
            "finalCta": "Llamado final a la acción"
          }`,
        },
        ...messages,
      ],
    });
  
    return completion.choices[0].message?.content ?? "";
  }