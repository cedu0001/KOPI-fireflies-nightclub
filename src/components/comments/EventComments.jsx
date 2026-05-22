const EventComments = ({comments}) => {
    return ( 
        <article>
           <h2>COMMENTS</h2>
            <div className="flex flex-col gap-6">

        {comments.map((comment) => {

          const formattedDate =
            new Date(comment.date)
              .toLocaleDateString(
                "en-GB",
                {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                }
              );

          return (
            <article
              key={comment.id}
              
            >

              <div className="mb-2 flex gap-4 items-baseline">

                <h5 className="!py-0">
                  {comment.name}
                </h5>

                <span className="text-highlight-secondary">
                  Posted {formattedDate}
                </span>

              </div>

              <p className="max-w-200">{comment.content}</p>

            </article>
          );
        })}

      </div>
        </article>
     );
}
 
export default EventComments;