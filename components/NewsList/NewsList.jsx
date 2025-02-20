import React from "react";
import { Menu, MenuItem } from "components";
import styles from "./NewsList.module.scss";

import kfnotes from "./kfnotes";

const limit = 4;
const news = kfnotes.rss.channel.item;

const NewsList = function () {
	return (
		<ul className={styles.news}>
			{news.map((news, i) => {
				if (i < 4) {
					const { link, title, description, image } = news;
					return (
						<li key={link}>
									<a className="hoverline" href={link}>{title}</a>
						</li>
					);
				}
			})}
		</ul>
	);
};

export default NewsList;
