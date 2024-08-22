import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

const useWordSelector = (dispatch, gameId) => {
  const [cachedWords, setCachedWords] = useState([]);

  useEffect(() => {
    const fetchWords = async () => {
      try {
        if (cachedWords.length === 0) {
          // 沒緩存才從Firebase拿
          console.log("noCache");
          const wordsCollection = collection(db, "words");
          const querySnapshot = await getDocs(wordsCollection);

          const wordList = querySnapshot.docs.map((doc) =>
            doc.data().word.toUpperCase()
          );
          setCachedWords(wordList);
          console.log("Fetched and cached words:", wordList); // 打印获取到的数据
        } else {
          console.log("Using cached words:", cachedWords);
        }

        if (cachedWords.length > 0) {
          console.log("isCache");

          const randomIndex = Math.floor(Math.random() * cachedWords.length);
          const randomWord = cachedWords[randomIndex];
          dispatch({ type: "SET_CORRECT_WORD", payload: randomWord });
        }
      } catch (error) {
        console.error("Error fetching words from Firestore: ", error);
      }
    };

    fetchWords();
  }, [cachedWords, gameId, dispatch]);
};

export default useWordSelector;
