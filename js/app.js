function sendPost() {
    let postTitle = document.getElementById("post-title").value;
    let postContent = document.getElementById("post-content").value;

    let postData = {
        title: postTitle,
        body : postContent,
        userId: 1
    }
    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 201) {
            document.getElementById("post-status").innerHTML = "Post Success";
        }else if(this.readyState != 4) {
            document.getElementById("post-status").innerHTML = "Posting";
        }else {
            document.getElementById("post-status").innerHTML = "Post fail";
        }
    }
    ajax.open("POST","https://jsonplaceholder.typicode.com/posts", true)
    ajax.setRequestHeader("Content-Type", "application/json");
    ajax.send(JSON.stringify(postData));
}

document.getElementById("post-submit").addEventListener("click",sendPost)

function updatePost() {
    let postData = {
        title: "foo"
    }
    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            document.getElementById("post-status").innerHTML = "Post Success";
            console.log(this.responseText);
        }else if(this.readyState != 4) {
            document.getElementById("post-status").innerHTML = "Posting";
            console.log("loading");
        }else {
            document.getElementById("post-status").innerHTML = "Post fail";
            console.log("Patch error: " + this.status);
        }
    }
    ajax.open("PATCH","https://jsonplaceholder.typicode.com/posts/1", true)
    ajax.setRequestHeader("Content-Type", "application/json");
    ajax.send(JSON.stringify(postData));
}

updatePost();

function deletePost() {
    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            document.getElementById("post-status").innerHTML = "Post Success";
            console.log(this.responseText);
        }else if(this.readyState != 4) {
            document.getElementById("post-status").innerHTML = "Posting";
            console.log("delete loading");
        }else {
            document.getElementById("post-status").innerHTML = "Post fail";
            console.log("delete error: " + this.status);
        }
    }
    ajax.open("DELETE","https://jsonplaceholder.typicode.com/posts/1", true)
    ajax.send();
}
 deletePost();

function getPosts() {
    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            let posts = JSON.parse(this.responseText);
            document.getElementById("post-container") .innerHTML = "";
            for(let i=0; i<posts.length; i++){
                document.getElementById("post-container").innerHTML += "<h3>" + posts[i]. title + "</h3>";
                document.getElementById("post-container").innerHTML += "<p>" + posts[i]. body + "</p>";
            }
        }else if(this.readyState != 4) {
            document.getElementById("post-container").innerHTML = "<h3>Posts loading</h3>";
            
        }else {
            document.getElementById("post-container").innerHTML = "<h3>Post fail</h3.";
            
        }
    }
    ajax.open("GET","https://jsonplaceholder.typicode.com/posts", true)
    ajax.send();
} 
getPosts();



















































//function sendTweet () {
  //  let tweetTitle = document.getElementById("title-input").value;
    //let tweetBody = document.getElementById("body-input").value;
    
    //let tweetData = {
      // title: tweetTitle,
       //body: tweetBody,
       //userId: 1
    //};
 
//    let ajax = new XMLHttpRequest();
  //  ajax.onreadystatechange = function() {
//    if(this.readyState == 4 && this.status === 201){
     //       console.log(JSON.parse(this.responseText));
       // }else if(this.readyState != 4) {
         //   document.getElementById("tweetData").innerHTML= "LOADING!";
        //}else{
          //  document.getElementById("tweetData").innerHTML = "Something went Wrong!"
        //}
    
//    };
 
  //  ajax.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
    //ajax.setRequestHeader("Content-Type", "application/json");
    //ajax.send(JSON.stringify(tweetData));
 //}
 //let tweetButton = document.getElementById("tweet-submit");
 //tweetButton.addEventListener("click", sendTweet)



 //function updateTweet() {
   // let tweetTitle = document.getElementById("title-input").value;
    //let tweetBody = document.getElementById("body-input").value;

    //let tweetData = {
      //  title: tweetTitle,
        //body: tweetBody,
        //userId: 1
    // };

     //let ajax = new XMLHttpRequest();
    //ajax.onreadystatechange = function() {
      //  if(this.readyState == 4 && this.status === 200){
        //    console.log(JSON.parse(this.responseText));
        //}else if(this.readyState != 4) {
          //  console.log("LOADING!");
        //}else{
          //  console.log("Something went Wrong!")
            //console.log(this.status);
        //}
    
    //};
    //ajax.open("PATCH", "https://jsonplaceholder.typicode.com/posts/1", true);
    //ajax.setRequestHeader("Content-Type", "application/json", "charset=UTF-8");
   // ajax.send(JSON.stringify(tweetData));

 //}
 //updateTweet;

 //function tweetDelete() {
   // let tweetTitle = document.getElementById("title-input").value;
    //let tweetBody = document.getElementById("body-input").value;

    //let tweetData = {
      //  title: tweetTitle,
       // body: tweetBody,
        //userId: 1
     //};

    // let ajax = new XMLHttpRequest();
     //ajax.onreadystatechange = function() {
       // if(this.readyState == 4 && this.status === 204){
         //   console.log(JSON.parse(this.responseText));
        //}else if(this.readyState != 4) {
          //  console.log("LOADING!");
        //}else{
          //  console.log("Something went Wrong!")
            //console.log(this.status);
       // }
    
    //};
    //ajax.open("DELETE", "https://jsonplaceholder.typicode.com/posts/1", true);
    //ajax.setRequestHeader("Content-Type", "application/json");
    //ajax.send();
// }
 //tweetDelete();

 //function tweetLoop(){
   // let tweetTitle = document.getElementById("title-input").value;
    //let tweetBody = document.getElementById("body-input").value;

    //let tweetData = {
      //  title: tweetTitle,
       // body: tweetBody,
       // userId: 1
     //};

     //for(var i=0; i < tweet.length; i++) {

     //}

     //let ajax = new XMLHttpRequest();
     //ajax.onreadystatechange = function() {
       // if(this.readyState == 4 && this.status === 203){
         //   console.log(JSON.parse(this.responseText));
        //}else if(this.readyState != 4) {
          //  console.log("LOADING!");
        //}else{
          //  console.log("Something went Wrong!")
            //console.log(this.status);
        //}
    
   // };
    //ajax.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    //ajax.setRequestHeader("Content-Type", "application/json");
    //ajax.send(JSON.stringify(tweetData));
// }
 
 //tweetLoop();