export default function Posts({ posts, loading }) {

    if (loading) return <p>Loading ...</p>
    return (<>
        <ul>
            {posts?.map(post => (<li key={post.id}>{post.title}</li>))}
        </ul>
    </>)

}