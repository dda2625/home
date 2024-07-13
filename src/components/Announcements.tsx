async function PullForumData(URL: string) {
  try {
    const response = await fetch(
      URL
    );
    if (response.ok) {
      const data = await response.json();
      return data.data;
    } else {
      console.error("Error fetching data:", response.status);
      return null;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

async function AnnoucementPosts() {
  var posts = [];
  
  const announcements = await PullForumData('https://forum.vatsim-scandinavia.org/api/discussions?filter[tag]=announcements');
  
  for (const post of await announcements) {
    const firstPost = await PullForumData('https://forum.vatsim-scandinavia.org/api/posts?filter[id]='+post.relationships.firstPost.data.id);
    const firstPostContent = await firstPost[0].attributes.contentHtml
    const postdata = {
      slug:   post.attributes.slug,
      title: post.attributes.title,
      created: post.attributes.createdAt,
      content: firstPostContent,
    };
    posts.push(postdata);
  }
  return posts;
}

var posts = await AnnoucementPosts();

const Annoucements: React.FC = () => {
  return <div>
            {posts.slice(0, 2).map(post =>
                                <div className="p-2 mt-2 mb-4 hover:bg-white dark:hover:bg-black hover:brightness-[95%]">
                                <a href={'https://forum.vatsim-scandinavia.org/d/'+post.slug} target="_blank">
                                    <div className="flex">
                                        <div className="w-[90%]">
                                            <div className="font-semibold text-lg text-secondary dark:text-white">
                                                {post.title}
                                            </div>
                                            <div className="text-sm line-clamp-2" dangerouslySetInnerHTML={{__html: post.content}}>

                                            </div>
                                        </div>
                                        <div className="w-[10%] text-grey text-right dark:text-white">
                                            {new Date(post.created).toLocaleDateString() }
                                        </div>
                                    </div>
                                </a>
                            </div>
            )}
         </div>;
};

export default Annoucements;
