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
    // add `xmlns:media="http://search.yahoo.com/mrss/"`
    xmlns: {
      media: "http://search.yahoo.com/mrss/",
      atom: "http://www.w3.org/2005/Atom",
    },
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
      "dc:creator": "me@julian.pro (Julian Köhn)",
      // custom data for media. The url must be the full url (including https://)
      customData: `<media:content
          type="image/${post.data.image.url.format == "jpg" ? "jpeg" : "png"}"
          width="${post.data.image.url.width}"
          height="${post.data.image.url.height}"
          medium="image"
          url="${context.site + post.data.image.url.src}" />
          <enclosure
             type="image/${
               post.data.image.url.format == "jpg" ? "jpeg" : "png"
             }"
              length="${post.data.image.url.size}"
             url="${context.site + post.data.image.url.src}" />
      `,
    })),
    // (optional) Benutzerdefinierten XML-Code einfügen
    customData: `<language>de</language>
        <atom:link href="${context.site}blog-feed.xml" rel="self" type="application/rss+xml" />
    `,
  });
}