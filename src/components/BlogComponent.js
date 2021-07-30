import React, {Fragment, useEffect, useState} from 'react';
import { BsArrowRight } from 'react-icons/bs';
import SocialIcons from './Util/SocialIcons';
import SideHighlightContent from './Util/SideHighlightContent';
import { handleNavbarScroll, formatBlogDate } from '../common/utils';

const BlogComponent = () => {
    const [blogList, setBlogList] = useState({});
    const { feed, items } = blogList;
    const fetchBlogPosts = async () => {
        try{
            // await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@thinkwik')
            await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@dgokul19')
            .then((res) => res.json())
            .then((data) => {
                if (data.status === 'ok') {
                    setBlogList(data);
                } else {
                    setBlogList({feed: {},items: []});
                }
            });
        } catch(ex){
            setBlogList({feed: {},items: []});
        }
    };
    
    
    useEffect(() => {
        fetchBlogPosts();
        let scrollElement = document.querySelector('.blogComponent');
        scrollElement.addEventListener('scroll', handleNavbarScroll);
        return () => scrollElement ? scrollElement.removeEventListener('scroll', handleNavbarScroll) : null;
    }, []);

    console.log({items});

    return (
        <Fragment>
            <div className="blogComponent">
                <SocialIcons />
                    <div className={`blogContainer`}>
                        <h1>Recent <span>Blogs</span></h1>
                        <div className={'blogBoxContain'}>
                            {
                                items && items.length ? (
                                    items.map(blog => (
                                        <div className={'blogBox'} key={blog.title}> 
                                            <img src={blog.thumbnail} alt={``}/>
                                            <div className={`blogBxContent`}>
                                                <span className={`dataObj`}>{`${formatBlogDate(blog.pubDate)}`}</span>
                                                <h3 className={`blogTitle`}>{`${blog.title}`}</h3>
                                                <p>{`${blog.description.replace(/<[^>]*>?/gm, '')}`}</p>
                                                <a target="_blank" href={blog.link}>Read more <BsArrowRight /></a>
                                            </div>
                                        </div>
                                    ))
                                ) : null
                            }
                        </div>
                    </div>
                <SideHighlightContent content={`Stories`}/>
            </div>
        </Fragment>
    );
}
 
export default BlogComponent;