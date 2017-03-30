function removeAccents(strToReplace) {
	strToReplace = strToReplace.toLowerCase();
	str_acento =     "áàãâäéèêëíìîïóòõôöúùûüçÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÖÔÚÙÛÜÇ";
	str_sem_acento = "aaaaaeeeeiiiiooooouuuucAAAAAEEEEIIIIOOOOOUUUUC";
	var nova="";
	for (var i = 0; i < strToReplace.length; i++) {
		if (str_acento.indexOf(strToReplace.charAt(i)) != -1) {
			nova+=str_sem_acento.substr(str_acento.search(strToReplace.substr(i,1)),1);
		} else {
			nova+=strToReplace.substr(i,1);
		}
	}
	return nova;
}