package services;

import java.util.List;

//import org.apache.tika.language.LanguageIdentifier;

import entities.TweetEntity;


public class LanguageDetection {
/*	public static LanguageDetection singleton;

	/**
	 * Constructeur privé
	 */
	/*private LanguageDetection() {

	}*/

	/**
	 * récupération du singleton
	 * 
	 * @return
	 */
/*	public static LanguageDetection getSingleton() {
		if (null == singleton) {
			singleton = new LanguageDetection();
		}
		return singleton;
	}

	public List<String> languageDetector(List<TweetEntity> tweets) {
		List<String> result = null;
		int i = 0;
for(TweetEntity tweet:tweets){
	if (!tweet.getIsRetweet()){
		LanguageIdentifier identifier = new LanguageIdentifier(tweet.getText());
		if (identifier.getLanguage() == "en") {
			result.add(tweet.getText());
			System.out.println(tweet.getText());
			i++;
		}
	}
	System.out.println(i);
	}return result;
	}*/
	
}