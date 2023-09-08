import LittleTitle from "../@DEFAULT_COMPONENT/TITLES/LittleTitle";
import BigTitle from "../@DEFAULT_COMPONENT/TITLES/BigTitle";
import BlogCard from './BlogCard'
import blogOne from './ressource/blogOne.png'
import blogTwo from './ressource/blogTwo.png'
import blogThree from './ressource/blogThree.png'

function Blog() {
    const blog = [
        {date: "20 January, 2023", title: "Become a UX/UI Designer With Career Foundry.",},
        {date: "15 January, 2023", title: "The Best App Development For Your Business Plan.",},
        {date: "08 January, 2023", title: "The Best Portfolio For Agency Design Thinking",},
    ]

    return (
        <section className="pb-28 px-3 lg:px-32">
            <div className="text-center py-6 px-7 leading-7">
                <LittleTitle>My Blog</LittleTitle>
                <BigTitle>LATEST BLOG</BigTitle>
            </div>

            <main className="md:flex gap-x-4">
                <BlogCard image={blogOne} date={blog[0].date} title={blog[0].title} />
                <BlogCard image={blogTwo} date={blog[1].date} title={blog[1].title} />
                <BlogCard image={blogThree} date={blog[2].date} title={blog[2].title} />
            </main>
        </section>
    )
}

export default Blog