
const StoryPanel = ({story}) => {

    return (
      <div className="story-overview">
        <h3>{story.id}</h3>
        <p>{story.sectionName}</p>
        <p>{story.webTitle}</p>

        <p>{story.webUrl}</p>
      </div>
    )
  };
  
  export default StoryPanel;