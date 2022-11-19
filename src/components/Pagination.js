// you can use it in all your projects!

export default function Pagination({ postsPerPage, totalPosts, paginate }) {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav>
            <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
                {pageNumbers.map(number => (
                    <li key={number}>
                        <a onClick={() => paginate(number)} href="!#">{number}</a>
                    </li>
                ))}
            </ul>
        </nav>

    )

}