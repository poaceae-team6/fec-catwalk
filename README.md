# FEC - Catwalk
![javascript](https://img.shields.io/badge/JavaScript-20232A?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![react](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![node.js](https://img.shields.io/badge/Node.js-20232A?style=for-the-badge&logo=nodedotjs&logoColor=green)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=flat&logo=css3&logoColor=white)
![Jest](https://img.shields.io/badge/-Jest-20232A?style=for-the-badge&logo=jest&logoColor=red)
![Enzyme](https://img.shields.io/badge/-Enzyme-20232A?style=for-the-badge&logo=testingLibrary&logoColor=red)
![Express](https://img.shields.io/badge/-Express-20232A?style=for-the-badge&logo=express&logoColor=yellow)
![Axios](https://img.shields.io/badge/-axios-20232A?style=for-the-badge&logo=axios&logoColor=yellow)
![Webpack](https://img.shields.io/badge/-webpack-20232A?style=for-the-badge&logo=webpack&logoColor=blueviolet)
![Babel](https://img.shields.io/badge/-Babel-20232A?style=for-the-badge&logo=babel&logoColor=yellow)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=flat&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=flat&logo=github&logoColor=white)

![poaceae-project-catwalk-demo](https://user-images.githubusercontent.com/39775868/141661854-d121d7e9-45a0-4709-9843-339f1fcd489d.gif)

# Project Catwalk
Hack Reactor front end capstone. We are approached by our client with the tasks on updating an old ecommerce front end to boost the site's sales. As a team of three, we built four main components which were the Overview, Related Products, Questions & Answers, and Ratings & Reviews. To accelarate our development time and enriche the e-commerce browsing experience, we implemented React hooks, Context, and HOC into our production.

# Overview
Provides a quick insight on the current product. Showing the different styles available, current price, description, and features of the product. The Overview displays the hero image front and center. Selecting the icons will update the hero image to the selected style. Toggling the heart icon will add/remove the currently selected style of the product from the Outfit List.

# Related Products & Your Outfits
Related Products widgets consist of two parts. One is the Related products which are related to the current item displayed in Overview. The user can scroll through the carousel of cards and navigate to that particular item. And, upon clicking on a star button a modal would pop up which compares the feature between the related card and the current prodcut. Once a card is clicked, it will update the Overview item and all components accordingly.
The second part is the Your Outfits section, which is unique to each user. It gives the user the ability to save the current style of the product by clicking the Add to Outfit card or clicking the heart icon in Overview. The Outfit List will persist after refresh so the user maintans access to previously added items.

# Questions & Answers
The question and answer consist of three parts. The first one is the Search bar. When user input more than 3 characters, the filter will be activated, and when user clear the input to 2 characters or less, the filter will be stopped. 
The second part is the Question list, the page will display two questions by default, users are able to load more questions, vote for helpfulness, and add specific questions. 
The third part is the Answer, for each question, the page will display two answers by default. User can load more answers, vote helpfulness and report the answers. User can also submit their own answers with photos. 

# Ratings and Reviews
The ratings and reviews widget breaks down rating and review information about the given product, all of which information is provided by users of the site. On page load the widget will request information from the api to dynamically render the correct information on the DOM. You can also interact with the widget to sort, report, vote helpful and add reviews. In adding reviews, the users can put in ratings on the product as well as each related characteristics, upload review photos and more to share. Upon submission, all entries will be validated.

# Technologies & Performance
Our team used React to build dynamically-rendered for an optimized user experience. On server-side, we used Express.routers to connect to API and 

![performance-chart](https://user-images.githubusercontent.com/39775868/141662333-30d81ca3-7721-4e7d-9a00-f6d653789cf3.jpg)

# Installation
1. Install the project with npm
2. Run the below commands:
```
npm install 
npm run server-dev
```
