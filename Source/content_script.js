walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bArsenie Boca\b/g, "Marius Bica");
	v = v.replace(/\bArsenie boca\b/g, "Marius Bica");
	v = v.replace(/\barsenie Boca\b/g, "marius Bica");
	v = v.replace(/\barsenie boca\b/g, "marius bica");
	v = v.replace(/\bArsenie\b/g, "Marius");
	v = v.replace(/\barsenie\b/g, "marius");
	v = v.replace(/\bPrislop\b/g, "Innobyte");
	v = v.replace(/\bprislop\b/g, "innobyte");

	v = v.replace(/\bmormantul\b/g, "biroul");
	v = v.replace(/\bmormant\b/g, "birou");
	v = v.replace(/\bmormântul\b/g, "biroul");
	v = v.replace(/\bmormânt\b/g, "birou");
	v = v.replace(/\bMormantul\b/g, "Biroul");
	v = v.replace(/\bMormant\b/g, "Birou");
	v = v.replace(/\bMormântul\b/g, "Biroul");
	v = v.replace(/\bMormânt\b/g, "Birou");

	v = v.replace(/\bcredincios\b/g, "programator");
	v = v.replace(/\bCredincios\b/g, "Programator");
	v = v.replace(/\bcredincioși\b/g, "programatori");
	v = v.replace(/\bCredincioși\b/g, "Programatori");

	
	textNode.nodeValue = v;
}


