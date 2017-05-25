package responses;

import java.io.Serializable;
import java.util.HashMap;
import java.util.Map;


/**
 * Class de réponse pour l'affichage des occurences by hashtag
 * @author iness
 */
public class MostTweetedHash implements Serializable{
	private static final long serialVersionUID = 1L;
	Map<String, Integer> data = new HashMap<String, Integer>();

	/**
	 * @return the data
	 */
	public Map<String, Integer> getData() {
		return data;
	}

	/**
	 * @param data the data to set
	 */
	public void setData(Map<String, Integer> data) {
		this.data = data;
	}
}