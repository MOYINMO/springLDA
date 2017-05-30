package responses;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import entities.TweetEntity;

/**
 * @author iness
 */
public class GenericListResponse implements Serializable{
	private static final long serialVersionUID = 1L;
	List<TweetEntity> data = new ArrayList<TweetEntity>();

	/**
	 * @return the data
	 */
	public List<TweetEntity> getData() {
		return data;
	}

	/**
	 * @param data the data to set
	 */
	public void setData(List<TweetEntity> data) {
		this.data = data;
	}
	
}