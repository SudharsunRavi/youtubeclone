const commentsData = [
    {
      name: "Akshay Saini",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Akshay Saini",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [
        {
          name: "Akshay Saini",
          text: "Lorem ipsum dolor sit amet, consectetur adip",
          replies: [],
        },
        {
          name: "Akshay Saini",
          text: "Lorem ipsum dolor sit amet, consectetur adip",
          replies: [
            {
              name: "Akshay Saini",
              text: "Lorem ipsum dolor sit amet, consectetur adip",
              replies: [
                {
                  name: "Akshay Saini",
                  text: "Lorem ipsum dolor sit amet, consectetur adip",
                  replies: [
                    {
                      name: "Akshay Saini",
                      text: "Lorem ipsum dolor sit amet, consectetur adip",
                      replies: [
                        {
                          name: "Akshay Saini",
                          text: "Lorem ipsum dolor sit amet, consectetur adip",
                          replies: [],
                        },
                      ],
                    },
                    {
                      name: "Akshay Saini",
                      text: "Lorem ipsum dolor sit amet, consectetur adip",
                      replies: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Akshay Saini",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Akshay Saini",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Akshay Saini",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Akshay Saini",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
];

const Comment = ({ data }) => {
    const { name, text } = data;
    return (
      <div className="flex shadow-sm bg-gray-100 px-2 py-3 rounded-lg my-2">
        <img
          className="w-12 h-12"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="icon"
        />
        <div className="px-3">
          <p className="font-bold">{name}</p>
          <p>{text}</p>
        </div>
      </div>
    );
};

const CommentsList=({comments})=>{
    return(
        <div>
            {comments.map((comment,index)=>
                (
                    <div key={index}>
                        <Comment data={comment}/>
                        <div className="ml-5 border border-l-black">
                            <CommentsList comments={comment.replies}/>
                        </div>
                    </div>
            ))}
        </div>
    )
}

const CommentsContainer = () => {
    
  return (
    <div className="mt-8">
        <h1 className="text-2xl font-bold">Comments</h1>
        <div className="text-black">
            {/* <Comment data={commentsData[0]} /> */}
            <CommentsList comments={commentsData}/>
        </div>
    </div>
    
  )
}

export default CommentsContainer