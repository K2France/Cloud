import '@k2oss/k2-broker-core';

metadata = {
	"systemName": "JSONPlaceholder",
	"displayName": "JSONPlaceholder Broker",
	"description": "Sample broker for JSONPlaceholder"
};

ondescribe = function() {
    postSchema({ objects: {
                "com.k2.sample.json.posts": {
                    displayName: "Posts",
                    description: "Manages Posts",
                    properties: {
                        "com.k2.sample.json.posts.id": {
                            displayName: "ID",
                            type: "number"
                        },
                        "com.k2.sample.json.posts.userId": {
                            displayName: "User ID",
                            type: "number"
                        },
                        "com.k2.sample.json.posts.title": {
                            displayName: "Title",
                            type: "string"
                        },
                        "com.k2.sample.json.posts.body": {
                            displayName: "Body",
                            type: "string"
                        }
                    },
                    methods: {
                        "com.k2.sample.json.posts.getList": {
                            displayName: "Get Posts List",
                            type: "list",
                            outputs: [ "com.k2.sample.json.posts.id", "com.k2.sample.json.posts.userId", "com.k2.sample.json.posts.title", "com.k2.sample.json.posts.body" ]
                        },
                        "com.k2.sample.json.posts.getById": {
                            displayName: "Get Post By ID",
                            type: "read",
                            inputs: ["com.k2.sample.json.posts.id"],                   
                            requiredInputs: ["com.k2.sample.json.posts.id"],
                            outputs: [ "com.k2.sample.json.posts.id", "com.k2.sample.json.posts.userId", "com.k2.sample.json.posts.title", "com.k2.sample.json.posts.body" ]
                        },
                        "com.k2.sample.json.posts.getByUserId": {
                            displayName: "Get Posts By User ID",
                            type: "list",
                            inputs: ["com.k2.sample.json.posts.userId"],   
                            requiredInputs: ["com.k2.sample.json.posts.userId"],
                            outputs: [ "com.k2.sample.json.posts.id", "com.k2.sample.json.posts.userId", "com.k2.sample.json.posts.title", "com.k2.sample.json.posts.body" ]
                        },
                        "com.k2.sample.json.posts.create": {
                            displayName: "Create Post",
                            type: "create",
                            inputs: ["com.k2.sample.json.posts.userId", "com.k2.sample.json.posts.title", "com.k2.sample.json.posts.body"],
                            outputs: [ "com.k2.sample.json.posts.id", "com.k2.sample.json.posts.userId", "com.k2.sample.json.posts.title", "com.k2.sample.json.posts.body" ]
                        },
                        "com.k2.sample.json.posts.update": {
                            displayName: "Update Post",
                            type: "update",
                            inputs: ["com.k2.sample.json.posts.id","com.k2.sample.json.posts.userId", "com.k2.sample.json.posts.title", "com.k2.sample.json.posts.body"],
                            requiredInputs: ["com.k2.sample.json.posts.id"],
                            outputs: [ "com.k2.sample.json.posts.id", "com.k2.sample.json.posts.userId", "com.k2.sample.json.posts.title", "com.k2.sample.json.posts.body" ]
                        },
                        "com.k2.sample.json.posts.delete": {
                            displayName: "Delete Post",
                            type: "delete",
                            inputs: ["com.k2.sample.json.posts.id"],
                            requiredInputs: ["com.k2.sample.json.posts.id"]
                        }
                    }
                },
                "com.k2.sample.json.comments": {
                    displayName: "Comments",
                    description: "Manages Comments",
                    properties: {
                        "com.k2.sample.json.comments.id": {
                            displayName: "ID",
                            type: "number"
                        },
                        "com.k2.sample.json.comments.postId": {
                            displayName: "Post ID",
                            type: "number"
                        },
                        "com.k2.sample.json.comments.name": {
                            displayName: "Name",
                            type: "string"
                        },
                        "com.k2.sample.json.comments.email": {
                            displayName: "Email",
                            type: "string"
                        },
                        "com.k2.sample.json.comments.body": {
                            displayName: "Body",
                            type: "string"
                        }
                    },
                    methods: {
                        "com.k2.sample.json.comments.getList": {
                            displayName: "Get Comments List",
                            type: "list",
                            outputs: [ "com.k2.sample.json.comments.id", "com.k2.sample.json.comments.postId", "com.k2.sample.json.comments.name", "com.k2.sample.json.comments.email", "com.k2.sample.json.comments.body" ]
                        },
                        "com.k2.sample.json.comments.getById": {
                            displayName: "Get Comment By ID",
                            type: "read",
                            inputs: ["com.k2.sample.json.comments.id"],
                            requiredInputs: ["com.k2.sample.json.comments.id"],
                            outputs: [ "com.k2.sample.json.comments.id", "com.k2.sample.json.comments.postId", "com.k2.sample.json.comments.name", "com.k2.sample.json.comments.email", "com.k2.sample.json.comments.body" ]
                        },
                        "com.k2.sample.json.comments.getByPostId": {
                            displayName: "Get Comments By Post ID",
                            type: "list",
                            inputs: ["com.k2.sample.json.comments.postId"],      
                            requiredInputs: ["com.k2.sample.json.comments.postId"],
                            outputs: [ "com.k2.sample.json.comments.id", "com.k2.sample.json.comments.postId", "com.k2.sample.json.comments.name", "com.k2.sample.json.comments.email", "com.k2.sample.json.comments.body" ]
                        }
                    }
                },
                "com.k2.sample.json.todos": {
                    displayName: "To Do",
                    description: "Manages To Dos",
                    properties: {
                        "com.k2.sample.json.todos.id": {
                            displayName: "ID",
                            type: "number"
                        },
                        "com.k2.sample.json.todos.userId": {
                            displayName: "User ID",
                            type: "number"
                        },
                        "com.k2.sample.json.todos.title": {
                            displayName: "Title",
                            type: "string"
                        },
                        "com.k2.sample.json.todos.completed": {
                            displayName: "Completed",
                            type: "boolean"
                        }
                    },
                    methods: {
                        "com.k2.sample.json.todos.getList": {
                            displayName: "Get To Dos List",
                            type: "list",
                            outputs: [ "com.k2.sample.json.todos.id", "com.k2.sample.json.todos.userId", "com.k2.sample.json.todos.title", "com.k2.sample.json.todos.completed" ]
                        },
                        "com.k2.sample.json.todos.getById": {
                            displayName: "Get To Do By ID",
                            type: "read",
                            inputs: ["com.k2.sample.json.todos.id"],
                            requiredInputs: ["com.k2.sample.json.todos.id"],
                            outputs: [ "com.k2.sample.json.todos.id", "com.k2.sample.json.todos.userId", "com.k2.sample.json.todos.title", "com.k2.sample.json.todos.completed" ]
                        }
                    }
                },
                "com.k2.sample.json.users": {
                    displayName: "Users",
                    description: "Manages Users",
                    properties: {
                        "com.k2.sample.json.users.id": {
                            displayName: "ID",
                            type: "number"
                        },
                        "com.k2.sample.json.users.name": {
                            displayName: "Name",
                            type: "string"
                        },
                        "com.k2.sample.json.users.username": {
                            displayName: "User Name",
                            type: "string"
                        },
                        "com.k2.sample.json.users.email": {
                            displayName: "Email",
                            type: "string"
                        },
                        "com.k2.sample.json.users.address.street": {
                            displayName: "Address.Street",
                            type: "string"
                        },
                        "com.k2.sample.json.users.address.suite": {
                            displayName: "Address.Suite",
                            type: "string"
                        },
                        "com.k2.sample.json.users.address.city": {
                            displayName: "Address.City",
                            type: "string"
                        },
                        "com.k2.sample.json.users.address.geo.lat": {
                            displayName: "Address.Geo.Latitude",
                            type: "string"
                        },
                        "com.k2.sample.json.users.address.geo.lng": {
                            displayName: "Address.Get.Longitude",
                            type: "string"
                        },
                        "com.k2.sample.json.users.phone": {
                            displayName: "Phone",
                            type: "string"
                        },
                        "com.k2.sample.json.users.website": {
                            displayName: "Website",
                            type: "string"
                        },
                        "com.k2.sample.json.users.company.name": {
                            displayName: "Company.Name",
                            type: "string"
                        },
                        "com.k2.sample.json.users.company.catchPhrase": {
                            displayName: "Company.CatchPhrase",
                            type: "string"
                        },
                        "com.k2.sample.json.users.company.bs": {
                            displayName: "Company.BS",
                            type: "string"
                        }
                    },
                    methods: {
                        "com.k2.sample.json.users.getList": {
                            displayName: "Get Users List",
                            type: "list",
                            outputs: ["com.k2.sample.json.users.id",
                            "com.k2.sample.json.users.name",
                            "com.k2.sample.json.users.username",
                            "com.k2.sample.json.users.email",
                            "com.k2.sample.json.users.address.street",
                            "com.k2.sample.json.users.address.suite",
                            "com.k2.sample.json.users.address.city",
                            "com.k2.sample.json.users.address.geo.lat",
                            "com.k2.sample.json.users.address.geo.lng",
                            "com.k2.sample.json.users.phone",
                            "com.k2.sample.json.users.website",
                            "com.k2.sample.json.users.company.name",
                            "com.k2.sample.json.users.company.catchPhrase",
                            "com.k2.sample.json.users.company.bs"]
                        },
                        "com.k2.sample.json.users.getById": {
                            displayName: "Get Users By ID",
                            type: "read",
                            inputs: ["com.k2.sample.json.users.id"],
                            requiredInputs: ["com.k2.sample.json.users.id"],
                            outputs: ["com.k2.sample.json.users.id",
                            "com.k2.sample.json.users.name",
                            "com.k2.sample.json.users.username",
                            "com.k2.sample.json.users.email",
                            "com.k2.sample.json.users.address.street",
                            "com.k2.sample.json.users.address.suite",
                            "com.k2.sample.json.users.address.city",
                            "com.k2.sample.json.users.address.geo.lat",
                            "com.k2.sample.json.users.address.geo.lng",
                            "com.k2.sample.json.users.phone",
                            "com.k2.sample.json.users.website",
                            "com.k2.sample.json.users.company.name",
                            "com.k2.sample.json.users.company.catchPhrase",
                            "com.k2.sample.json.users.company.bs"]                        }
                    }
            }
        }
    }
    )};

onexecute = function(objectName, methodName, parameters, properties) {
    switch (objectName)
    {
        case "com.k2.sample.json.posts": onexecutePosts(methodName, parameters, properties); break;
        case "com.k2.sample.json.comments": onexecuteComments(methodName, parameters, properties); break;
        case "com.k2.sample.json.todos": onexecuteToDos(methodName, parameters, properties); break;
        case "com.k2.sample.json.users": onexecuteUsers(methodName, parameters, properties); break;
        default: throw new Error("The object " + objectName + " is not supported.");
    }
}

function onexecutePosts(methodName: string, parameters: SingleRecord, properties: SingleRecord) {
    switch (methodName)
    {
        case "com.k2.sample.json.posts.getList": onexecutePostsGetList(parameters, properties); break;
        case "com.k2.sample.json.posts.getById": onexecutePostsGetById(parameters, properties); break;
        case "com.k2.sample.json.posts.getByUserId": onexecutePostsGetByUserId(parameters, properties); break;
        case "com.k2.sample.json.posts.create": onexecutePostsCreate(parameters, properties); break;
        case "com.k2.sample.json.posts.update": onexecutePostsUpdate(parameters, properties); break;
        case "com.k2.sample.json.posts.delete": onexecutePostsDelete(parameters, properties); break;
        case "com.k2.sample.json.posts.delete": onexecuteToDosGetList(parameters, properties); break;
        default: throw new Error("The method " + methodName + " is not supported.");
    }
}

function onexecuteComments(methodName: string, parameters: SingleRecord, properties: SingleRecord) {
    switch (methodName)
    {
        case "com.k2.sample.json.comments.getList": onexecuteCommentsGetList(parameters, properties); break;
        case "com.k2.sample.json.comments.getById": onexecuteCommentsGetById(parameters, properties); break;
        case "com.k2.sample.json.comments.getByPostId": onexecuteCommentsGetByPostId(parameters, properties); break;
        default: throw new Error("The method " + methodName + " is not supported.");
    }
}

function onexecuteToDos(methodName: string, parameters: SingleRecord, properties: SingleRecord) {
    switch (methodName)
    {
        case "com.k2.sample.json.todos.getList": onexecuteToDosGetList(parameters, properties); break;
        case "com.k2.sample.json.todos.getById": onexecuteToDosGetById(parameters, properties); break;
        default: throw new Error("The method " + methodName + " is not supported.");
    }
}

function onexecuteUsers(methodName: string, parameters: SingleRecord, properties: SingleRecord) {
    switch (methodName)
    {
        case "com.k2.sample.json.users.getList": onexecuteUsersGetList(parameters, properties); break;
        case "com.k2.sample.json.users.getById": onexecuteUsersGetById(parameters, properties); break;
        default: throw new Error("The method " + methodName + " is not supported.");
    }
}
function onexecutePostsGetList(parameters: SingleRecord, properties: SingleRecord) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== 4) return;
        if (xhr.status !== 200) throw new Error("Failed with status " + xhr.status);
        
        //console.log(xhr.responseText);
        var obj = JSON.parse(xhr.responseText);
        for (var key in obj) {
            postResult({
                "com.k2.sample.json.posts.id": obj[key].id,
                "com.k2.sample.json.posts.userId": obj[key].userId,
                "com.k2.sample.json.posts.title": obj[key].title,
                "com.k2.sample.json.posts.body": obj[key].body
            });
        }
    };
    xhr.open("GET", 'https://jsonplaceholder.typicode.com/posts');
    xhr.send();
}

function onexecutePostsGetById(parameters: SingleRecord, properties: SingleRecord) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== 4) return;
        if (xhr.status !== 200) throw new Error("Failed with status " + xhr.status);

        //console.log(xhr.responseText);
        var obj = JSON.parse(xhr.responseText);
        postResult({
            "com.k2.sample.json.posts.id": obj.id,
            "com.k2.sample.json.posts.userId": obj.userId,
            "com.k2.sample.json.posts.title": obj.title,
            "com.k2.sample.json.posts.body": obj.body
        });
    };
    xhr.open("GET", 'https://jsonplaceholder.typicode.com/posts/' + properties["com.k2.sample.json.posts.id"]);
    xhr.send();
}

function onexecutePostsGetByUserId(parameters: SingleRecord, properties: SingleRecord) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== 4) return;
        if (xhr.status !== 200) throw new Error("Failed with status " + xhr.status);
        
        //console.log(xhr.responseText);
        var obj = JSON.parse(xhr.responseText);
        for (var key in obj) {
            postResult({
                "com.k2.sample.json.posts.id": obj[key].id,
                "com.k2.sample.json.posts.userId": obj[key].userId,
                "com.k2.sample.json.posts.title": obj[key].title,
                "com.k2.sample.json.posts.body": obj[key].body
            });
        }
    };
    xhr.open("GET", 'https://jsonplaceholder.typicode.com/posts?userId=' + properties["com.k2.sample.json.posts.userId"]);
    xhr.send();
}

function onexecutePostsCreate(parameters: SingleRecord, properties: SingleRecord) {
    var data = JSON.stringify({
        "userId": properties["com.k2.sample.json.posts.userId"],
        "title": properties["com.k2.sample.json.posts.title"],
        "body": properties["com.k2.sample.json.posts.body"]
      });

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== 4) return;
        // look for 'created' code
        if (xhr.status !== 201) throw new Error("Failed with status " + xhr.status);
        
        //console.log(xhr.responseText);
        var obj = JSON.parse(xhr.responseText);
        postResult({
            "com.k2.sample.json.posts.id": obj.id,
            "com.k2.sample.json.posts.userId": obj.userId,
            "com.k2.sample.json.posts.title": obj.title,
            "com.k2.sample.json.posts.body": obj.body
        });
    };
    xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);
}

function onexecutePostsUpdate(parameters: SingleRecord, properties: SingleRecord) {
    var data = JSON.stringify({
        "userId": properties["com.k2.sample.json.posts.userId"],
        "title": properties["com.k2.sample.json.posts.title"],
        "body": properties["com.k2.sample.json.posts.body"]
      });

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== 4) return;
        if (xhr.status !== 200) throw new Error("Failed with status " + xhr.status);
        
        //console.log(xhr.responseText);
        var obj = JSON.parse(xhr.responseText);
        postResult({
            "com.k2.sample.json.posts.id": obj.id,
            "com.k2.sample.json.posts.userId": obj.userId,
            "com.k2.sample.json.posts.title": obj.title,
            "com.k2.sample.json.posts.body": obj.body
        });
    };
    xhr.open("PUT", 'https://jsonplaceholder.typicode.com/posts/' + properties["com.k2.sample.json.posts.id"]);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);
}

function onexecutePostsDelete(parameters: SingleRecord, properties: SingleRecord) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== 4) return;
        if (xhr.status !== 200) throw new Error("Failed with status " + xhr.status);
        //console.log(xhr.responseText);
    };
    xhr.open("DELETE", 'https://jsonplaceholder.typicode.com/posts/' + properties["com.k2.sample.json.posts.id"]);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();
}

function onexecuteCommentsGetList(parameters: SingleRecord, properties: SingleRecord) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== 4) return;
        if (xhr.status !== 200) throw new Error("Failed with status " + xhr.status);
        
        //console.log(xhr.responseText);
        var obj = JSON.parse(xhr.responseText);
        for (var key in obj) {
            postResult({
                "com.k2.sample.json.comments.id": obj[key].id,
                "com.k2.sample.json.comments.postId": obj[key].postId,
                "com.k2.sample.json.comments.name": obj[key].name,
                "com.k2.sample.json.comments.email": obj[key].email,
                "com.k2.sample.json.comments.body": obj[key].body
            });
        }
    };
    xhr.open("GET", 'https://jsonplaceholder.typicode.com/comments');
    xhr.send();
}

function onexecuteCommentsGetById(parameters: SingleRecord, properties: SingleRecord) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== 4) return;
        if (xhr.status !== 200) throw new Error("Failed with status " + xhr.status);
        
        //console.log(xhr.responseText);
        var obj = JSON.parse(xhr.responseText);
        postResult({
            "com.k2.sample.json.comments.id": obj.id,
            "com.k2.sample.json.comments.postId": obj.postId,
            "com.k2.sample.json.comments.name": obj.name,
            "com.k2.sample.json.comments.email": obj.email,
            "com.k2.sample.json.comments.body": obj.body
        });
    };
    xhr.open("GET", 'https://jsonplaceholder.typicode.com/comments/' + properties["com.k2.sample.json.comments.id"]);
    xhr.send();
}

function onexecuteCommentsGetByPostId(parameters: SingleRecord, properties: SingleRecord) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== 4) return;
        if (xhr.status !== 200) throw new Error("Failed with status " + xhr.status);
        
        //console.log(xhr.responseText);
        var obj = JSON.parse(xhr.responseText);
        for (var key in obj) {
            postResult({
                "com.k2.sample.json.comments.id": obj[key].id,
                "com.k2.sample.json.comments.postId": obj[key].postId,
                "com.k2.sample.json.comments.name": obj[key].name,
                "com.k2.sample.json.comments.email": obj[key].email,
                "com.k2.sample.json.comments.body": obj[key].body
            });
        }
    };
    xhr.open("GET", 'https://jsonplaceholder.typicode.com/comments?postId=' + properties["com.k2.sample.json.comments.postId"]);
    xhr.send();
}

function onexecuteToDosGetList(parameters: SingleRecord, properties: SingleRecord) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== 4) return;
        if (xhr.status !== 200) throw new Error("Failed with status " + xhr.status);
        
        //console.log(xhr.responseText);
        var obj = JSON.parse(xhr.responseText);
        for (var key in obj) {
            postResult({
                "com.k2.sample.json.todos.id": obj[key].id,
                "com.k2.sample.json.todos.userId": obj[key].userId,
                "com.k2.sample.json.todos.title": obj[key].title,
                "com.k2.sample.json.todos.completed": obj[key].completed
            });
        }
    };
    xhr.open("GET", 'https://jsonplaceholder.typicode.com/todos');
    xhr.send();
}

function onexecuteToDosGetById(parameters: SingleRecord, properties: SingleRecord) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== 4) return;
        if (xhr.status !== 200) throw new Error("Failed with status " + xhr.status);
        
        //console.log(xhr.responseText);
        var obj = JSON.parse(xhr.responseText);
            postResult({
                "com.k2.sample.json.todos.id": obj.id,
                "com.k2.sample.json.todos.userId": obj.userId,
                "com.k2.sample.json.todos.title": obj.title,
                "com.k2.sample.json.todos.completed": obj.completed
            });
    };
    xhr.open("GET", 'https://jsonplaceholder.typicode.com/todos/' + properties["com.k2.sample.json.todos.id"]);
    xhr.send();
}

function onexecuteUsersGetList(parameters: SingleRecord, properties: SingleRecord) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== 4) return;
        if (xhr.status !== 200) throw new Error("Failed with status " + xhr.status);
        
        //console.log(xhr.responseText);
        var obj = JSON.parse(xhr.responseText);
        for (var key in obj) {
            postResult({
                "com.k2.sample.json.users.id": obj[key].id,
                "com.k2.sample.json.users.name": obj[key].name,
                "com.k2.sample.json.users.username": obj[key].username,
                "com.k2.sample.json.users.email": obj[key].email,
                "com.k2.sample.json.users.address.street": obj[key].address.street,
                "com.k2.sample.json.users.address.suite": obj[key].address.suite,
                "com.k2.sample.json.users.address.city": obj[key].address.city,
                "com.k2.sample.json.users.address.geo.lat": obj[key].address.geo.lat,
                "com.k2.sample.json.users.address.geo.lng": obj[key].address.geo.lng,
                "com.k2.sample.json.users.phone": obj[key].phone,
                "com.k2.sample.json.users.website": obj[key].website,
                "com.k2.sample.json.users.company.name": obj[key].company.name,
                "com.k2.sample.json.users.company.catchPhrase": obj[key].company.catchPhrase,
                "com.k2.sample.json.users.company.bs": obj[key].company.bs
            });
        }
    };
    xhr.open("GET", 'https://jsonplaceholder.typicode.com/users');
    xhr.send();
}

function onexecuteUsersGetById(parameters: SingleRecord, properties: SingleRecord) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== 4) return;
        if (xhr.status !== 200) throw new Error("Failed with status " + xhr.status);
        
        //console.log(xhr.responseText);
        var obj = JSON.parse(xhr.responseText);
        postResult({
            "com.k2.sample.json.users.id": obj.id,
            "com.k2.sample.json.users.name": obj.name,
            "com.k2.sample.json.users.username": obj.username,
            "com.k2.sample.json.users.email": obj.email,
            "com.k2.sample.json.users.address.street": obj.address.street,
            "com.k2.sample.json.users.address.suite": obj.address.suite,
            "com.k2.sample.json.users.address.city": obj.address.city,
            "com.k2.sample.json.users.address.geo.lat": obj.address.geo.lat,
            "com.k2.sample.json.users.address.geo.lng": obj.address.geo.lng,
            "com.k2.sample.json.users.phone": obj.phone,
            "com.k2.sample.json.users.website": obj.website,
            "com.k2.sample.json.users.company.name": obj.company.name,
            "com.k2.sample.json.users.company.catchPhrase": obj.company.catchPhrase,
            "com.k2.sample.json.users.company.bs": obj.company.bs
        });
    };
    xhr.open("GET", 'https://jsonplaceholder.typicode.com/users/' + properties["com.k2.sample.json.users.id"]);
    xhr.send();
}