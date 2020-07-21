# Pokemon Cather

## Home Page
    - Displays 3 random unique pokemon
        - Select 3 random pokemon from the Data
    
        - If Pokemon hasn't been encountered 
            - Add Pokemon to encounteredArray
        - If Pokemon has been encountered
            - Increment quality

        - Display the Pokemon (attached to Radio Button)

    - Pick a Pokemon (e.target)
        - Click a pokemon
            - If you haven't caught one yet
                - Add to caughtArray
            - If you have caught one 
                - Increment in caughtArray
        
        - Increment trios
        - Check for a game to end (after 10 sets)
            - If 10th trio, button will send you to a results page
            - If not over, display 3 new pokemon
    
## Results Page
    - Results page
    - Display what and how many Pokemon you've got and encountered
        - Reset Button 
            - Resets the game 
            - Saved empty arrays to caught and encountered arrays to 0

