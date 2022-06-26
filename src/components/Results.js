import React from "react";
function Results(props) {
  const { repos } = props;

  const listRepos = repos.items?.map((item, total_count) => {
    return (
      <tr key={item.id}>
        <td className="border p-2">{item.full_name}</td>
        <td className="border p-2">
          <a
            className="text-blue-800 hover:text-blue"
            href={item.clone_url}
            target="_blank"
            rel="noreferrer"
          >
            {item.clone_url}
          </a>
        </td>
        <td className="border p-2">{item.stargazers_count}</td>
        <td className="border p-2">{item.forks}</td>
        <td className="border p-2">{item.watchers_count}</td>
      </tr>
    );
  });

  return (
    <div className="flex flex-col font-mono mt-10 text-center ">
      <label className="flex text-lg font-semibold">Results</label>
      <div className="flex">
        <table className="table-fixed w-auto">
          <thead className="border">
            <tr>
              <th className="border p-2">full_name</th>
              <th className="border p-2">url</th>
              <th className="border p-2">stars</th>
              <th className="border p-2">forks</th>
              <th className="border p-2">watchers</th>
            </tr>
          </thead>
          <tbody className="border-t-2">{listRepos}</tbody>
        </table>
      </div>
    </div>
  );
}

export default Results;
