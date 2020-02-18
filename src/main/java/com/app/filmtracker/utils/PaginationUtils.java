package com.app.filmtracker.utils;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import com.app.filmtracker.models.Film;

public class PaginationUtils {
	
	public static final int RESULTS_PER_PAGE = 10;
	
	public static List<Film> getFilmsForPage(List<Film> films, int pageNumber) {
		List<Integer> indexes = getToAndFromIndexes(films.size(),pageNumber);
		
		if(indexes.get(1) == -1) {
			return new ArrayList<>();
		}
		return films.subList(indexes.get(0), indexes.get(1));
	}
	
	private static List<Integer> getToAndFromIndexes(int totalFilms, int pageNumber) {
		int toIndex;
		final int fromIndex = RESULTS_PER_PAGE * (pageNumber - 1); //inclusive
		
		final int maxPages = ((int) (totalFilms / 10)) + 1;
		final int itemsOnLastPage = (totalFilms % 10);
		
		
		if(pageNumber > maxPages) {
			toIndex = -1;
		}
		else if(pageNumber == maxPages) {
			toIndex = (fromIndex + itemsOnLastPage);
		} else {
			toIndex = (RESULTS_PER_PAGE * pageNumber); //exclusive
		}
		
		return new ArrayList<Integer>(Arrays.asList(fromIndex, toIndex));
	}
	
}
