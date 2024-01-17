export async function onRequestGet(context) {
    const id = context.params.id[0]

    if (!id) {
        return new Response('Not found', { status: 404 })
    }
    
    try {        
        const { results } = await context.env.DB.prepare(
            "SELECT * FROM post WHERE id=?"
        )
            .bind(id)
            .all()
        
        if (!results.length) {
            return new Response('Not found', { status: 404 })
        }

        return Response.json(results[0], { status: 200 });
    } catch (e) {
        console.log("error", e);
    }
}
