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
              className="p-6"
            >

              <div className="mb-2 flex gap-4 items-baseline">

                <h4 className="!py-0">
                  {comment.name}
                </h4>

                <span className="text-highlight-secondary">
                  {formattedDate}
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