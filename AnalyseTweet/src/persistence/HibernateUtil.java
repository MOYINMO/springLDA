package persistence;

import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

/**
 * Classe de configuration de Hibernate
 * @author iness
 * @version 1.0
 */
public class HibernateUtil {
	private static final SessionFactory sessionFactory = buildConfiguration();

	/**
	 * Methode de configuration de hibernate
	 * @return
	 */
	private static SessionFactory buildConfiguration() {
		try {
			return new Configuration().configure("/Hibernate.cfg.mysql.xml").buildSessionFactory();
		} catch (Throwable ex) {
			throw new ExceptionInInitializerError(ex);
		}
	}

	/**
	 * R�cuperer la sessionFactory
	 * @return
	 */
	public static SessionFactory getSessionFactory() {
		return sessionFactory;
	}

	/**
	 * Mettre fin � la connexion
	 */
	public static void shutdown() {
		getSessionFactory().close();
	}
}