const students = [
  {
    ID: 1,
    name: "Alice",
    age: 21,
    grade: "A",
    degree: "Btech",
    email: "alice@example.com",
  },
  {
    ID: 2,
    name: "Bob",
    age: 22,
    grade: "B",
    degree: "MBA",
    email: "bob@example.com",
  },
  {
    ID: 3,
    name: "Charlie",
    age: 20,
    grade: "C",
    degree: "Arts",
    email: "charlie@example.com",
  },
];
  
  function show_students(students) {
    const tableBody = document.querySelector(".show table"); // Get the table element
    tableBody.innerHTML=''
    students.forEach((student) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
              <td>${student.ID}</td>
              <td>${student.name}</td>
              <td>${student.email}</td>
              <td>${student.age}</td>
              <td>${student.grade}</td>
              <td>${student.degree} <span class="material-symbols-outlined edit-icon">edit_square</span>
                                    <span class="material-symbols-outlined delete-icon">delete</span>
                                                                                        </td>`;
      tableBody.appendChild(tr); // Append the row to the table
      
      const deleteIcon = tr.querySelector(".delete-icon");

        deleteIcon.addEventListener("click", () => {
            delete_student(student.ID);
            console.log(student.ID);
        });
    });
  }
  
  show_students(students); // Call the function to populate the table initially
  
  const searchbar = document.getElementById("searchbar");
  searchbar.addEventListener("input", (event) => {
    const query = event.target.value;
    search_student(query);
  });
  
  function search_student(query) {
    const filterdata = students.filter(
      (student) =>
        student.name.toLowerCase().includes(query.toLowerCase()) ||
        student.email.toLowerCase().includes(query.toLowerCase()) ||
        student.degree.toLowerCase().includes(query.toLowerCase())
    );
    show_students(filterdata);
}

const form = document.getElementById('student-form')

form.addEventListener("submit", function (event){
    event.preventDefault();

    const data = new FormData(form);

    const newStudent  = {
        ID:students.length+1,
        name:data.get("Name"),
        age:data.get("Age"),
        grade : data.get("GPA"),
        degree:data.get("Degree"),
        email:data.get("Email")
    };

    students.push(newStudent)
    show_students(students)
    form.reset()
})


function delete_student(studentID) {
    const index = students.findIndex((student) => student.ID === studentID);
    if (index !== -1) {
        students.splice(index, 1);
        show_students(students);
    }
}



