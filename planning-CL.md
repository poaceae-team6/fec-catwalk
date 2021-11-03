# App Component:
1. have a state `currentProduct` ✅
2. fetch the first 5 products on page 1 ✅
3. setCurrentProduct -> Step 1 [0] ✅
4. Render all components -> Overview with {currentProduct} as props ✅
                         
## Overview Component:
0. Create a global variable array `outfitList` ✅
0. Create 1 state `outfits` array ✅
0. Create `updateOutfitList(copyArray)` function which will setOutfits to copyArray and update the global variable outfitList ✅
1. have 3 more states `styles` & `currentStylesId` & `addToOutfit` ✅
2. fetch the styles object 
  - setStyles to `stylesObject.results`
  - setCurrentStyles to `stylesObject.results[0]`
3. render out some information
4. Create a Heart Icon!
  - When clicked, it will setAddToOutfit to true
5. render out all the styles as Style Components
  - use map to create the list
  - pass `setCurrentStylesId` to each of them

### Style Component:
1. Renders a mini thumnail of the image
2. When clicked, it will trigger `currentStylesId` and set the state to the current thumbnail's value (index)

## RelatedProducts:
1. Fetch the relatedProducts array using currentId
  - Fetch all the products for each element and save that in an array (`relatedItems`)
    - map that array into RelatedProductsItem Components.
    - pass `currentObject` to each of them

### RelatedProductsItem Component:
1. Fetch the styles object
2. saves the stylesObject.results[0] as a variable (`styleObject`)
3. Render all the information
4. When card is clicked, it will trigger `fetchNewProduct` with the current `product id`, which will then fetch the new data and setCurrentProduct to that new data

## YourOutfit
0. Create a state `isEmpty`, set to true
1. useEffect checks if global variable array is empty
  - if not, setIsEmpty to false 
2. In `render`: If the array is empty, render the default card with a plus icon
  - When the default card is clicked, trigger `renderOutfits` function
```
renderOutfits():
  - setIsEmpty to false
  - push the currentProduct with the currentStyle as a style property into the global variable array
  - setOutfits to the global variable outfitList
```
3. If isEmpty is false -> map out `outfitList` as YourOutfitItem Components with the outfit as props

### YourOutfitItem:
1. render the information using the passed down prop `outfit`
2. each card will have a `delete button`, when clicked, it will triger the `deleteOutfit` function:
```
deleteOutfit():
  - Create a copy of the outfitList, remove the current item from that array then trigger the updateOutfitList(copyArray)
```