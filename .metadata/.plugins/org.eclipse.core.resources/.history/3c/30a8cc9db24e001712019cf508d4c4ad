package dao;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;


/**
 * 
 * @author iness
 * @version 1.0
 */
public class GenericDAO {

	/**
	 * Ne peut pas �tre instanci� hors de l'arboresence fille
	 */
	protected GenericDAO(){
	}
	
	/**
	 * variables
	 */
	protected static SessionFactory sessionfactory;
	protected Session session;
	protected Transaction transaction;
	

	/**
	 * Methode d'ouverture de la connexion
	 */
	protected void openSingletonConnexion(){
		session=sessionfactory.openSession();
		transaction=session.beginTransaction();
	}
	
	/**
	 * Methode de fermeture de la connexion
	 */
	protected void closeSingletonConnexion(){
		transaction.commit();
		session.close();
	}
	
}
