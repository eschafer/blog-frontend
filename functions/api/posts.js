export async function onRequestGet(context) {
    try {        
        const { results } = await context.env.DB.prepare("SELECT * FROM post").all()
        
        console.log("results", results)

        if (!results.length) {
            return new Response('Not found', { status: 404 })
        }

        return Response.json(results, { status: 200 });
    } catch (e) {
        console.log("error", e);
    }

    // return Response.json(posts)
}
