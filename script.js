//References
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;

//Questions and Options array (expanded for 100 questions example)
const quizArray = [
        { id: 0, question: "What does SQL stand for?", options: ["Structured Query Language", "Structured Question Language", "Simple Query Language", "Sequential Query Language"], answer: "Structured Query Language" },
        { id: 1, question: "Which SQL keyword is used to retrieve data?", options: ["GET", "SELECT", "FETCH", "RETRIEVE"], answer: "SELECT" },
        { id: 2, question: "Which SQL clause is used to filter the results?", options: ["WHERE", "HAVING", "FILTER", "LIMIT"], answer: "WHERE" },
        { id: 3, question: "What is the default sorting order of the ORDER BY clause?", options: ["Ascending", "Descending", "Alphabetical", "Numerical"], answer: "Ascending" },
        { id: 4, question: "Which SQL keyword is used to prevent duplicate records?", options: ["DISTINCT", "UNIQUE", "EXCLUSIVE", "NO_DUPLICATES"], answer: "DISTINCT" },
        { id: 5, question: "How do you specify a condition in an SQL query?", options: ["FILTER", "CONDITION", "WHERE", "HAVING"], answer: "WHERE" },
        { id: 6, question: "Which SQL statement is used to create a new table?", options: ["NEW TABLE", "CREATE TABLE", "MAKE TABLE", "ADD TABLE"], answer: "CREATE TABLE" },
        { id: 7, question: "Which SQL function is used to find the maximum value in a column?", options: ["MAX()", "HIGHEST()", "TOP()", "GREATEST()"], answer: "MAX()" },
        { id: 8, question: "What is the purpose of the JOIN clause?", options: ["Combine rows from multiple tables", "Create a new table", "Delete rows from a table", "Update rows in a table"], answer: "Combine rows from multiple tables" },
        { id: 9, question: "What type of JOIN returns all records when there is a match in either left or right table?", options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL JOIN"], answer: "FULL JOIN" },
        { id: 10, question: "Which SQL clause is used to group rows that have the same values?", options: ["GROUP BY", "ORDER BY", "JOIN", "FILTER"], answer: "GROUP BY" },
        { id: 11, question: "What does the SQL statement 'ALTER TABLE' do?", options: ["Change the structure of a table", "Add new rows to a table", "Delete a table", "Create a table"], answer: "Change the structure of a table" },
        { id: 12, question: "What is the purpose of the SQL 'INDEX'?", options: ["Speed up queries", "Add new columns", "Delete rows", "Restrict data"], answer: "Speed up queries" },
        { id: 13, question: "Which SQL keyword is used to update existing records?", options: ["MODIFY", "CHANGE", "UPDATE", "EDIT"], answer: "UPDATE" },
        { id: 14, question: "Which SQL keyword is used to delete records from a table?", options: ["REMOVE", "DELETE", "DROP", "CLEAR"], answer: "DELETE" },
        { id: 15, question: "What is a primary key?", options: ["A unique identifier for a record", "A key used to encrypt data", "A field that can be null", "A key used in JOIN operations"], answer: "A unique identifier for a record" },
        { id: 16, question: "Which SQL function is used to count the number of rows in a table?", options: ["COUNT()", "SUM()", "TOTAL()", "NUM()"], answer: "COUNT()" },
        { id: 17, question: "What is the purpose of the SQL 'HAVING' clause?", options: ["Filter groups after aggregation", "Filter individual rows", "Sort results", "Join tables"], answer: "Filter groups after aggregation" },
        { id: 18, question: "Which SQL statement is used to remove all records from a table, but not the table itself?", options: ["DELETE", "TRUNCATE", "DROP", "REMOVE"], answer: "TRUNCATE" },
        { id: 19, question: "Which SQL keyword is used to retrieve a unique list of values?", options: ["UNIQUE", "DISTINCT", "SOLO", "EXCLUSIVE"], answer: "DISTINCT" },
        { id: 20, question: "What does the SQL 'LIMIT' clause do?", options: ["Restricts the number of rows returned", "Sorts the result set", "Joins tables", "Filters results"], answer: "Restricts the number of rows returned" },
        { id: 21, question: "What does the acronym CRUD stand for in SQL?", options: ["Create, Read, Update, Delete", "Count, Read, Update, Drop", "Create, Retrieve, Update, Drop", "Count, Retrieve, Update, Delete"], answer: "Create, Read, Update, Delete" },
        { id: 22, question: "Which SQL statement is used to add a new row to a table?", options: ["INSERT INTO", "ADD", "CREATE", "UPDATE"], answer: "INSERT INTO" },
        { id: 23, question: "Which clause is used to specify the column names in an INSERT statement?", options: ["VALUES", "SET", "COLUMNS", "INTO"], answer: "INTO" },
        { id: 24, question: "Which function would you use to find the average value of a column?", options: ["AVG()", "MEAN()", "MEDIAN()", "SUM()"], answer: "AVG()" },
        { id: 25, question: "What is a foreign key?", options: ["A key used to link two tables", "A unique identifier for a record", "A key that cannot be null", "A key for indexing"], answer: "A key used to link two tables" },
        { id: 26, question: "What does the SQL 'JOIN' clause do?", options: ["Combines rows from two or more tables", "Deletes rows from a table", "Updates rows in a table", "Creates a new table"], answer: "Combines rows from two or more tables" },
        { id: 27, question: "Which type of JOIN returns only unmatched rows from the left table?", options: ["RIGHT JOIN", "LEFT JOIN", "INNER JOIN", "FULL JOIN"], answer: "LEFT JOIN" },
        { id: 28, question: "Which SQL function is used to find the lowest value in a column?", options: ["MIN()", "LOWEST()", "BOTTOM()", "LEAST()"], answer: "MIN()" },
        { id: 29, question: "What is the purpose of the SQL 'DROP' statement?", options: ["Remove a table or database", "Remove all rows from a table", "Change the structure of a table", "Add new columns"], answer: "Remove a table or database" },
        { id: 30, question: "What does the SQL 'SET' keyword do?", options: ["Assigns values to variables or columns", "Sets the limit on rows", "Filters results", "Joins tables"], answer: "Assigns values to variables or columns" },
        { id: 31, question: "Which SQL statement is used to modify the structure of an existing table?", options: ["MODIFY TABLE", "ALTER TABLE", "UPDATE TABLE", "CHANGE TABLE"], answer: "ALTER TABLE" },
        { id: 32, question: "Which clause is used to sort the results of a query?", options: ["ORDER BY", "SORT BY", "GROUP BY", "FILTER"], answer: "ORDER BY" },
        { id: 33, question: "What does the SQL 'UNION' operator do?", options: ["Combines the results of two queries", "Filters results", "Joins tables", "Sorts results"], answer: "Combines the results of two queries" },
        { id: 34, question: "What is the purpose of the SQL 'WHERE' clause?", options: ["Filter records based on a condition", "Sort records", "Group records", "Join tables"], answer: "Filter records based on a condition" },
        { id: 35, question: "What is a subquery?", options: ["A query within another query", "A query that updates records", "A query that joins tables", "A query that deletes records"], answer: "A query within another query" },
        { id: 36, question: "Which keyword is used to define a default value for a column?", options: ["DEFAULT", "INIT", "SET", "VALUE"], answer: "DEFAULT" },
        { id: 37, question: "Which function is used to get the current date and time?", options: ["GETDATE()", "CURRENT_TIMESTAMP()", "NOW()", "SYSDATE()"], answer: "CURRENT_TIMESTAMP()" },
        { id: 38, question: "What is the purpose of the SQL 'GROUP BY' clause?", options: ["Group rows that have the same values", "Sort rows", "Filter rows", "Join tables"], answer: "Group rows that have the same values" },
        { id: 39, question: "What is a view in SQL?", options: ["A virtual table based on a query", "A physical table", "A stored procedure", "An index"], answer: "A virtual table based on a query" },
        { id: 40, question: "Which keyword is used to create a new database?", options: ["CREATE DATABASE", "NEW DATABASE", "MAKE DATABASE", "ADD DATABASE"], answer: "CREATE DATABASE" },
        { id: 41, question: "Which SQL clause is used to limit the number of rows returned by a query?", options: ["LIMIT", "TOP", "FETCH", "RESTRICT"], answer: "LIMIT" },
        { id: 42, question: "What does the SQL 'DISTINCT' keyword do?", options: ["Eliminates duplicate values", "Limits results", "Sorts results", "Joins tables"], answer: "Eliminates duplicate values" },
        { id: 43, question: "Which function is used to concatenate two or more strings in SQL?", options: ["CONCAT()", "MERGE()", "JOIN()", "APPEND()"], answer: "CONCAT()" },
        { id: 44, question: "Which clause is used to filter records after aggregation?", options: ["HAVING", "WHERE", "FILTER", "GROUP BY"], answer: "HAVING" },
        { id: 45, question: "What is the default data type for a column without any specified data type?", options: ["VARCHAR", "TEXT", "CHAR", "INTEGER"], answer: "VARCHAR" },
        { id: 46, question: "Which SQL statement is used to change the data type of a column?", options: ["ALTER TABLE", "CHANGE COLUMN", "MODIFY COLUMN", "UPDATE COLUMN"], answer: "ALTER TABLE" },
        { id: 47, question: "Which keyword is used to add a constraint to a column?", options: ["CONSTRAINT", "ADD", "MODIFY", "SET"], answer: "CONSTRAINT" },
        { id: 48, question: "What is an index in SQL?", options: ["A performance optimization tool", "A key for data encryption", "A type of JOIN", "A column in a table"], answer: "A performance optimization tool" },
        { id: 49, question: "Which SQL function returns the number of non-null values in a column?", options: ["COUNT()", "SUM()", "TOTAL()", "NUM()"], answer: "COUNT()" },
        { id: 50, question: "What is a stored procedure?", options: ["A precompiled collection of SQL statements", "A single SQL statement", "A trigger", "An index"], answer: "A precompiled collection of SQL statements" },
        { id: 51, question: "What does the SQL 'TRUNCATE' statement do?", options: ["Removes all rows from a table", "Deletes a table", "Drops a database", "Modifies a table structure"], answer: "Removes all rows from a table" },
        { id: 52, question: "What is the purpose of the SQL 'REVOKE' statement?", options: ["Remove permissions from a user", "Grant permissions", "Change a table structure", "Delete records"], answer: "Remove permissions from a user" },
        { id: 53, question: "Which function is used to get the length of a string?", options: ["LENGTH()", "SIZE()", "CHAR_LENGTH()", "STRING_LENGTH()"], answer: "LENGTH()" },
        { id: 54, question: "What is a trigger in SQL?", options: ["A procedure that automatically executes when certain conditions are met", "A type of index", "A data encryption method", "A type of JOIN"], answer: "A procedure that automatically executes when certain conditions are met" },
        { id: 55, question: "What does the SQL 'BETWEEN' operator do?", options: ["Filters values within a range", "Joins tables", "Orders results", "Groups results"], answer: "Filters values within a range" },
        { id: 56, question: "Which SQL clause is used to sort data in descending order?", options: ["DESC", "ORDER DESC", "SORT DESC", "FILTER DESC"], answer: "DESC" },
        { id: 57, question: "Which function is used to return the current user in SQL?", options: ["USER()", "CURRENT_USER()", "SESSION_USER()", "CURRENT_USER_NAME()"], answer: "CURRENT_USER()" },
        { id: 58, question: "What is normalization in SQL?", options: ["Organizing data to reduce redundancy", "Encrypting data", "Indexing data", "Filtering data"], answer: "Organizing data to reduce redundancy" },
        { id: 59, question: "Which SQL clause is used to select rows with unique values?", options: ["DISTINCT", "UNIQUE", "SOLO", "EXCLUSIVE"], answer: "DISTINCT" },
        { id: 60, question: "What is a schema in SQL?", options: ["A collection of database objects", "A table structure", "An index", "A stored procedure"], answer: "A collection of database objects" },
        { id: 61, question: "Which SQL function calculates the sum of a numeric column?", options: ["SUM()", "TOTAL()", "ADD()", "COUNT()"], answer: "SUM()" },
        { id: 62, question: "What is a composite key?", options: ["A primary key composed of multiple columns", "A key that links two tables", "A foreign key", "A unique key"], answer: "A primary key composed of multiple columns" },
        { id: 63, question: "Which SQL statement is used to create a new user?", options: ["CREATE USER", "ADD USER", "NEW USER", "MAKE USER"], answer: "CREATE USER" },
        { id: 64, question: "What does the SQL 'GRANT' statement do?", options: ["Gives permissions to a user", "Revokes permissions", "Creates a new table", "Modifies a table"], answer: "Gives permissions to a user" },
        { id: 65, question: "Which SQL statement is used to rename a table?", options: ["RENAME TABLE", "ALTER TABLE", "CHANGE TABLE", "UPDATE TABLE"], answer: "ALTER TABLE" },
        { id: 66, question: "What is a data definition language (DDL)?", options: ["SQL commands that define the structure of a database", "Commands that manipulate data", "Commands that query data", "Commands that create indexes"], answer: "SQL commands that define the structure of a database" },
        { id: 67, question: "Which function is used to convert a string to uppercase in SQL?", options: ["UPPER()", "TO_UPPER()", "CAPS()", "STRING_UPPER()"], answer: "UPPER()" },
        { id: 68, question: "What does the SQL 'COALESCE()' function do?", options: ["Returns the first non-null value", "Returns the last non-null value", "Counts non-null values", "Concatenates strings"], answer: "Returns the first non-null value" },
        { id: 69, question: "Which SQL clause is used to filter records based on a condition?", options: ["WHERE", "HAVING", "FILTER", "GROUP BY"], answer: "WHERE" },
        { id: 70, question: "What does the SQL 'REPLACE()' function do?", options: ["Replaces all occurrences of a substring with another substring", "Removes a substring", "Finds a substring", "Concatenates strings"], answer: "Replaces all occurrences of a substring with another substring" },
        { id: 71, question: "Which keyword is used to define a unique constraint on a column?", options: ["UNIQUE", "DISTINCT", "CONSTRAINT", "KEY"], answer: "UNIQUE" },
        { id: 72, question: "Which SQL function returns the number of distinct values in a column?", options: ["COUNT(DISTINCT)", "SUM()", "TOTAL()", "NUM()"], answer: "COUNT(DISTINCT)" },
        { id: 73, question: "What is a database trigger?", options: ["A special type of stored procedure that executes automatically in response to certain events", "A command to add a new column", "A command to delete records", "A command to create a table"], answer: "A special type of stored procedure that executes automatically in response to certain events" },
        { id: 74, question: "Which SQL clause is used to join two tables based on a related column?", options: ["JOIN", "INNER JOIN", "OUTER JOIN", "FULL JOIN"], answer: "INNER JOIN" },
        { id: 75, question: "What does the SQL 'EXISTS' operator do?", options: ["Checks if a subquery returns any rows", "Checks for null values", "Counts rows", "Joins tables"], answer: "Checks if a subquery returns any rows" },
        { id: 76, question: "Which SQL clause is used to specify the columns to be returned by a query?", options: ["SELECT", "RETURN", "SHOW", "DISPLAY"], answer: "SELECT" },
        { id: 77, question: "What does the SQL 'ALTER' statement do?", options: ["Modifies the structure of an existing table", "Deletes a table", "Creates a new table", "Updates records"], answer: "Modifies the structure of an existing table" },
        { id: 78, question: "Which keyword is used to delete all data in a table but retain the table structure?", options: ["TRUNCATE", "DELETE", "DROP", "REMOVE"], answer: "TRUNCATE" },
        { id: 79, question: "Which SQL clause is used to restrict the number of rows returned by a query?", options: ["LIMIT", "TOP", "FETCH", "RESTRICT"], answer: "LIMIT" },
        { id: 80, question: "What does the SQL 'LIKE' operator do?", options: ["Searches for a specified pattern", "Filters data based on exact matches", "Joins tables", "Sorts data"], answer: "Searches for a specified pattern" },
        { id: 81, question: "Which SQL function would you use to remove leading and trailing spaces from a string?", options: ["TRIM()", "REPLACE()", "CLEAN()", "REMOVE()"], answer: "TRIM()" },
        { id: 82, question: "What is a data manipulation language (DML)?", options: ["SQL commands that manipulate data", "Commands that define the structure of a database", "Commands that create tables", "Commands that grant permissions"], answer: "SQL commands that manipulate data" },
        { id: 83, question: "Which SQL keyword is used to define a column that cannot accept NULL values?", options: ["NOT NULL", "REQUIRED", "MANDATORY", "NO_NULL"], answer: "NOT NULL" },
        { id: 84, question: "What does the SQL 'SUBSTRING()' function do?", options: ["Extracts a part of a string", "Concatenates strings", "Finds the length of a string", "Replaces a part of a string"], answer: "Extracts a part of a string" },
        { id: 85, question: "Which SQL function calculates the number of rows in a query result?", options: ["COUNT()", "SUM()", "TOTAL()", "NUM()"], answer: "COUNT()" },
        { id: 86, question: "What is an SQL injection attack?", options: ["A security vulnerability that allows attackers to execute arbitrary SQL code", "A method of optimizing queries", "A type of JOIN operation", "A way to encrypt data"], answer: "A security vulnerability that allows attackers to execute arbitrary SQL code" },
        { id: 87, question: "Which SQL keyword is used to add a new column to an existing table?", options: ["ALTER TABLE", "ADD COLUMN", "MODIFY TABLE", "INSERT COLUMN"], answer: "ALTER TABLE" },
        { id: 88, question: "What is the purpose of the SQL 'CASE' statement?", options: ["Provides conditional logic in SQL queries", "Joins tables", "Sorts results", "Filters data"], answer: "Provides conditional logic in SQL queries" },
        { id: 89, question: "What is a temporary table?", options: ["A table that is only available during the session in which it was created", "A table that is permanently stored", "A table used for backups", "A table used for data analysis"], answer: "A table that is only available during the session in which it was created" },
        { id: 90, question: "Which SQL function returns the current date?", options: ["CURDATE()", "CURRENT_DATE()", "GETDATE()", "NOW()"], answer: "CURRENT_DATE()" },
        { id: 91, question: "What is the purpose of the SQL 'VIEW'?", options: ["A virtual table based on a query", "A real table", "A type of index", "A database schema"], answer: "A virtual table based on a query" },
        { id: 92, question: "Which SQL keyword is used to define a default value for a column?", options: ["DEFAULT", "SET DEFAULT", "INIT", "VALUE"], answer: "DEFAULT" },
        { id: 93, question: "What does the SQL 'IFNULL()' function do?", options: ["Returns a specified value if the expression is NULL", "Replaces NULL values with a default", "Counts non-null values", "Concatenates strings"], answer: "Returns a specified value if the expression is NULL" },
        { id: 94, question: "Which SQL keyword is used to create an index on a table?", options: ["CREATE INDEX", "ADD INDEX", "MAKE INDEX", "INSERT INDEX"], answer: "CREATE INDEX" },
        { id: 95, question: "What is the purpose of the SQL 'COMMIT' statement?", options: ["To save all changes made during the transaction", "To roll back changes", "To start a transaction", "To delete a transaction"], answer: "To save all changes made during the transaction" },
        { id: 96, question: "Which SQL keyword is used to roll back a transaction?", options: ["ROLLBACK", "REVERT", "UNDO", "RECALL"], answer: "ROLLBACK" },
        { id: 97, question: "What does the SQL 'GROUP_CONCAT()' function do?", options: ["Concatenates values from multiple rows into a single string", "Groups rows by a column", "Counts the number of rows", "Finds the maximum value"], answer: "Concatenates values from multiple rows into a single string" },
        { id: 98, question: "Which SQL clause is used to combine the result of two SELECT statements?", options: ["UNION", "JOIN", "INTERSECT", "MERGE"], answer: "UNION" },
        { id: 99, question: "What is a data type in SQL?", options: ["A classification of data based on its type", "A way to sort data", "A method to join tables", "A procedure for creating tables"], answer: "A classification of data based on its type" }

    
];

// Select random 10 questions from quizArray
function selectRandomQuestions(questionsArray, numberOfQuestions) {
    const shuffledQuestions = [...questionsArray]; // Copy array to avoid modifying original
    shuffledQuestions.sort(() => Math.random() - 0.5); // Shuffle array
    return shuffledQuestions.slice(0, numberOfQuestions); // Return first 10
}

//Restart Quiz
restart.addEventListener("click", () => {
    initial();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
});

//Next Button
nextBtn.addEventListener(
    "click",
    (displayNext = () => {
        //increment questionCount
        questionCount += 1;
        //if last question
        if (questionCount == selectedQuestions.length) {
            //hide question container and display score
            displayContainer.classList.add("hide");
            scoreContainer.classList.remove("hide");
            //user score
            userScore.innerHTML =
                "Your score is " + scoreCount + " out of " + questionCount;
        } else {
            //display questionCount
            countOfQuestion.innerHTML =
                questionCount + 1 + " of " + selectedQuestions.length + " Question";
            //display quiz
            quizDisplay(questionCount);
            count = 11;
            clearInterval(countdown);
            timerDisplay();
        }
    })
);

//Timer
const timerDisplay = () => {
    countdown = setInterval(() => {
        count--;
        timeLeft.innerHTML = `${count}s`;

        if (count == 0) {
            clearInterval(countdown);
            displayNext();
        }
    }, 1000);
};

//Display quiz
const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".container-mid");
    //Hide other cards
    quizCards.forEach((card) => {
        card.classList.add("hide");
    });
    //display current question card
    quizCards[questionCount].classList.remove("hide");
};

//Quiz Creation
function quizCreator() {
    // Select 10 random questions from the full quizArray
    selectedQuestions = selectRandomQuestions(quizArray, 10);
    
    // generate quiz for each selected question
    for (let i of selectedQuestions) {
        //randomly sort options
        i.options.sort(() => Math.random() - 0.5);
        //quiz card creation
        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");
        //question number
        countOfQuestion.innerHTML = 1 + " of " + selectedQuestions.length + " Question";
        //question
        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);
        //options
        div.innerHTML += `
            <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
            <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
            <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
            <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
        `;
        quizContainer.appendChild(div);
    }
}

//Checker Function to check if option is correct or not
function checker(userOption) {
    let userSolution = userOption.innerText;
    let question =
        document.getElementsByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll(".option-div");

    //if user clicked answer == correct option stored in object
    if (userSolution === selectedQuestions[questionCount].correct) {
        userOption.classList.add("correct");
        scoreCount++;
    } else { 
        userOption.classList.add("incorrect");
        //For marking the correct option
        options.forEach((element) =>{
            if (element.innerText == selectedQuestions[questionCount].correct) {
                element.classList.add("correct");
            }
        });
     container.classList.add("shake");
     setTimeout(() => container.classList.remove("shake"), 400);

    }

    //clear interval(stop timer)
    clearInterval(countdown);
    //disable all options
    options.forEach((element) => {
        element.disabled = true;
    });
}

//initial setup
function initial() {
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    count = 11;
    clearInterval(countdown);
    timerDisplay();
    quizCreator();
    quizDisplay(questionCount);
}

//when user click on start button
startButton.addEventListener("click", () => {
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    initial();
});

//hide quiz and display start screen
window.onload = () => {
    startScreen.classList.remove("hide");
    displayContainer.classList.add("hide");
};
