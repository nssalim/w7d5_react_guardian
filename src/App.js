import './App.css';
import { useState, useEffect } from 'react';
import StoryList from './components/StoryList';
import StoryFilterForm from './components/StoryFilterForm';

function App() {
  const [articleIds, setArticleIds] = useState([]);
  const [stories, setStories] = useState([]);
  const [filteredStories, setFilteredStories] = useState([]);

  const fetchStoryData = () => {
    const url = `https://content.guardianapis.com/search?q=brexit&format=json&api-key=test`;


    fetch(url)      // returns a promise
    .then((response) => response.json())  // returns another promise
    .then((jsonData) => {
      setFilteredStories(jsonData);
    });
  },[]);

  // const fetchStoryData = (storyIds, numStories) => {
  //   //show and loop over first 3 ids and then map url to the promise of the fetch
  //   const topThree = storyIds.slice(0, numStories);
  //   let promises = topThree.map(url => fetch (`https://content.guardianapis.com/search?q=brexit&format=json&api-key=test`));

  //   Promise.all (promises)
  //   //jsonfies bit stream of data
  //     .then (responses => responses)  
  //     .then (responses => Promise.all(responses.map(r => r.json())))
  //     .then (stories => setStories(stories))

  //   }

  const handleUserFilter = (userInput) => {
    const someStories = stories.filter((currentStory) => {
      return currentStory.sectionName.toUpperCase().includes(userInput.toUpperCase());
    });
    setFilteredStories(someStories);
  };

//invokes fetchStoryData function
//   useEffect(() => { 
//     fetch("https://content.guardianapis.com/search?q=brexit&format=json&api-key=test")
//      .then((res) => res.json ())
//      .then((data) => {
//         setArticleIds(data);
//       });

// //empty array, only does it once when it loads the page
// },[]);



  // useEffect(() => { 
  //   fetchStoryData(articleIds, 10);
  // },[articleIds]);
  useEffect(() => { 
    fetchStoryData();
  }, []);


  return (
    <main>
      <h1>Guardian News</h1>
      <div id="top-section">
        <StoryFilterForm onUserInput={handleUserFilter}/>
      </div>
      <StoryList stories={filteredStories}/>
    </main>
  );
}

export default App;
