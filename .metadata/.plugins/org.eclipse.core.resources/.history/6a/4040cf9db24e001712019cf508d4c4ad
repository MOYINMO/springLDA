package comparator;

import java.util.Comparator;
import java.util.Map;

/**
 * Classe pour trier une map
 * @author iness
 *
 */
public class MapComparator implements Comparator<String> {
	Map<String, Integer> base;
	
	public MapComparator(Map<String, Integer> base) {
		this.base = base;
	}

	public int compare(String a, String b) {
		if (base.get(a) >= base.get(b)) {
			return -1;
		} else {
			return 1;
		}
	}

}
