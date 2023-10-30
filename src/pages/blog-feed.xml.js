import rss from "@astrojs/rss";
import { getSinglePage } from "@/lib/content-parser.astro";

export async function GET(context) {
    const posts = await getSinglePage("blog")

  return rss({
    // `<title>`-Feld in der XML-Ausgabe
    title: "Julian's Blog",
    // `<description>`-Feld in der XML-Ausgabe
    description:
      "Mein Blog teilt praktische Einsichten, um Sprachen wie Golang, Node.js, TypeScript und React zu meistern. Folge praktischen Tutorials und ausführlichen Artikeln, um als Entwickler zu wachsen.",
    // Ziehe die "site" deines Projektes von dem Endpunkt-Kontext ein
    // https://docs.astro.build/de/reference/api-reference/#endpunkt-kontext
    site: context.site,
    // Liste von `<item>`-Elementen in der XML-Ausgabe
    // Siehe Abschnitt "Generieren von 'items'" für Beispiele mit Inhalts-Sammlungen und Glob-Imports

    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
    })),
    // (optional) Benutzerdefinierten XML-Code einfügen
    customData: `<language>de</language>`,
  });
}