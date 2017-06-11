package services;

import java.util.ArrayList;
import java.util.List;

import entities.TweetEntity;

/**
 * @author iness
 */
public class TweetByHashService  extends GenericService {
	private static TweetByHashService singleton;
	
	/**
	 * private constructor
	 */
	private TweetByHashService(){
		
	}
	
	public static TweetByHashService getSingleton(){
		if(null == singleton){
			singleton = new TweetByHashService();
		}
		return singleton;
	}
	
	/**
	 * Get the tweets who constains the most used hashTag
	 * @param allHash
	 * @param tweets
	 * @return
	 */
	public List<TweetEntity> getTweetByHash(String hash, List<TweetEntity> tweets){
		List<TweetEntity> result = new ArrayList<TweetEntity>();
		for(TweetEntity tweet : tweets){
			if(tweet.getText().contains(hash)){
				result.add(tweet);
			}	
		}
		return result;
	}
	
}
