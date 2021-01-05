import StoryPanel from './StoryPanel';

const StoryList = ({ stories }) => {
  const storyNodes = stories.map((currentStory) => {
    return (
      <StoryPanel story={currentStory} key={currentStory.id}/>
    )
  });

  return (
    <section id="story-list">
      {storyNodes}
    </section>
  )
};

export default StoryList;