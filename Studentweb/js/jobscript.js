const JOB_API_LINK =  "https://reimagined-disco-69wxj74vwpwp25xgp-5001.app.github.dev/jobs";

fetch(JOB_API_LINK).then(response=>{
    if(!response.ok)
        throw new Error("Failed to fetch data");
    return response.json();
}).then(data=>{
    const tbody = document.querySelector("#jobtable tbody");

    data.forEach(job=>{
        const row = document.createElement("tr");

        row.innerHTML=`
        <td>${job.job_id}</td>
        <td>${job.job_title}</td>
        <td>${job.min_salary}</td>
        <td>${job.max_salary}</td>
        `;
        tbody.appendChild(row);
    });
}).catch(err=>{
    console.log(err.message);
});