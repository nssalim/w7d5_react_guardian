const StoryFilterForm = ({ onUserInput }) => {
    const handleFilterInput = (event) => {
      const userInput = event.target.value;
      onUserInput(userInput);
    };
  
    return (
      <>
        <span>story filter: </span>
        <input 
          type="text" 
          placeholder="search..."
          onChange={handleFilterInput}
        />
      </>
    )
  };
  
  export default StoryFilterForm;