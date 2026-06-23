const readmeBtn = document.getElementById("loadReadme");
const readmeContent = document.getElementById("readmeContent");

readmeBtn.addEventListener("click", () => {

    if(readmeContent.style.display === "block"){
        readmeContent.style.display = "none";
        return;
    }

    readmeContent.innerHTML = `
        <h3>Bank Management System</h3>

        <p>
            A desktop banking application developed using Java,
            JDBC, MySQL and Swing.
        </p>

        <h4>Features</h4>

        <ul>
            <li>Admin Login</li>
            <li>Create Account</li>
            <li>Deposit Money</li>
            <li>Withdraw Money</li>
            <li>Balance Inquiry</li>
            <li>Transaction History</li>
        </ul>

        <h4>Technologies Used</h4>

        <ul>
            <li>Java</li>
            <li>JDBC</li>
            <li>MySQL</li>
            <li>Java Swing</li>
        </ul>
    `;

    readmeContent.style.display = "block";
});