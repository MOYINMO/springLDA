package thread;

import dao.TweetDAO;

/**
 * @author iness
 */
public class DeleteTweetThread implements Runnable {

    /**
     * Constructor
     * @param ctx
     */
    public DeleteTweetThread(){
    }
    
    /**
     * run the thread
     */
    public void run() {
    	TweetDAO.getSingleton().deleteAll();
    }

}