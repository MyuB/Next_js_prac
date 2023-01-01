import { Fragment } from "react";
import Link from "next/link";

function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/first-page">first</Link>
        </li>
        <li>second</li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
