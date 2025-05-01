// Lessons.jsx
import React from "react";
import LessonLayout from "../layouts/LessonLayout";
import { ClockIcon, BookmarkIcon, AudioIcon } from "../components/icons";
import styles from "../styles/mainLesson.module.css";

const LessonThree = () => {
  return (
    <LessonLayout>
      <main className={styles.lessonsMain}>
        <section className={styles.lessonsInfo}>
          <div className={styles.lessonsTime}>
            <ClockIcon />
            About 30 mins to complete
          </div>
          <span>(Numbers)</span>
          <div className={styles.bookmark}>
            <BookmarkIcon />
            Bookmark
          </div>
        </section>
        <section className={styles.lessonSection}>
          <p className={styles.lessonDescription}>
            Lorem ipsum dolor sit amet consectetur. Placerat orci eu facilisi
            fermentum. Sed lobortis in nulla sed id eu arcu vulputate
            consectetur. Commodo laoreet quisque sit massa sed at semper tortor.
            Velit arcu a urna lorem amet faucibus. At dui arcu non eget velit
            faucibus vitae gravida pharetra. Nibh ipsum nulla viverra imperdiet.
            Arcu aenean dictumst amet gravida tortor. Nisl nec sagittis sagittis
            malesuada. Suscipit integer commodo tempus a ultrices habitant nulla
            pharetra. Aliquam et eu natoque imperdiet nunc faucibus elementum
            tincidunt malesuada. Lectus aliquam ut ullamcorper pellentesque
            neque. Tortor dui proin venenatis magna quis quam. Ullamcorper lacus
            in est tempor diam. In semper et interdum facilisis sit nibh ac.
            Feugiat aliquam sed id pharetra. Eu vel scelerisque id eu. Commodo
            quam semper augue quisque mattis volutpat. Vel integer feugiat morbi
            cras amet ipsum ultricies. Ut vel eu ut diam. Convallis sed duis
            massa neque pretium duis pharetra. Senectus vestibulum non semper
            dignissim arcu faucibus accumsan rhoncus. Auctor id aliquam vitae
            ligula in et nibh et. Odio vel vitae at volutpat aliquet nisi sed
            nulla interdum.Lectus aliquam ut ullamcorper pellentesque neque.
            Tortor dui proin venenatis magna quis quam. Ullamcorper lacus in est
            tempor diam. In semper et interdum facilisis sit nibh ac. Feugiat
            aliquam sed id pharetra. Eu vel scelerisque id eu. Commodo quam
            semper augue quisque mattis volutpat. Vel integer feugiat morbi cras
            amet ipsum ultricies. Ut vel eu ut diam. Convallis sed duis massa
            neque pretium duis pharetra. Senectus vestibulum non semper
            dignissim arcu faucibus accumsan rhoncus. Auctor id aliquam vitae
            ligula in et nibh et. Odio vel vitae at volutpat aliquet nisi sed
            nulla interdum.
          </p>
        </section>
        <section className={styles.lessonSection}>
          <h2 className={styles.lessonTitle}>Title</h2>
          <div className={styles.lessonVideo}>
            <AudioIcon />
          </div>
          <p className={styles.lessonDescription}>
            Lorem ipsum dolor sit amet consectetur. Ut fermentum ut et dolor
            penatibus enim adipiscing. Mauris sed cursus magna cursus. Risus
            felis habitant id amet sociis. Sit sem ac lacus tristique euismod
            suspendisse scelerisque eu. Vel erat turpis in ipsum tortor
            malesuada mi. Laoreet elementum urna nisi urna arcu lacus. In magna
            scelerisque viverra amet mauris non et enim mattis. Cursus volutpat
            etiam massa purus massa fames. Quam odio ultricies tellus sed
            blandit sed. Sed elit malesuada ut elementum risus. Orci sed
            bibendum praesent etiam commodo tempus. Purus neque sed massa arcu.
          </p>{" "}
        </section>
        <section className={styles.lessonSection}>
          <h2 className={styles.lessonTitle}>Title</h2>{" "}
          <div className={styles.lessonVideo}>
            <AudioIcon />
          </div>
          <p className={styles.lessonDescription}>
            Lorem ipsum dolor sit amet consectetur. Consectetur nec mi
            adipiscing egestas porttitor nunc. Volutpat malesuada suspendisse
            amet est arcu arcu vel sapien. Dignissim in faucibus laoreet nisl
            neque aliquam nec sed. Donec convallis quam scelerisque feugiat sed.
            Lorem sit facilisis faucibus enim. Facilisis maecenas metus arcu in
            tempor. Egestas id massa massa risus nunc aliquam. Purus nulla
            ultrices sodales malesuada egestas fusce laoreet. Morbi nisl dui
            lectus sodales vehicula. Id lectus ipsum nisi eu nascetur mauris
            sapien.
          </p>
        </section>
        <button className={styles.quizBtn}>Take Quiz</button>
      </main>
    </LessonLayout>
  );
};

export default LessonThree;
