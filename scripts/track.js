var characters = [false,false,false,false,false,false,false,false,false,false,false,false];
var keyitems = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var keyitemsRequiredForGoMode = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var bosses = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];

var keyitemlocations = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var characterlocations = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var townlocations = [0,0,0,0,0,0,0,0,0,0,0,0,0];
var trappedchestlocations = [0,0,0,0,0,0,0,0,0,0];
var trappedchestnames = ['Castle Eblan','Eblan Cave','Giant of Babil','Tower of Zot','Upper Babil','Feymarch','Lower Babil','Sylph Cave','Lunar Path','Lunar Sub.'];
var bossnames = ['Mist Dragon','Baron Soldiers','Octomamm','Antlion','Waterhag','Mom Bomb','Fabul Gauntlet','Milon','MilonZ','Dark Knight Cecil','Baron Guards','Yang','Baigan','Kainazzo','Dark Elf','Magus Sisters','Valvalis','Calcabrina','Golbez','Dr Lugae','Dark Imps','K & Q Eblan','Rubicant','Evil Wall','Elementals','CPU','Odin','Asura','Leviathan','Bahamut','Pale Dim','Lunar Dragons','Plague','Ogopogo','Wyvern'];
var objectives = [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0];
//0-98 and the last two being win/crystal objectives
//0 = Unchecked, 1 = Checked, 2 = Hidden
// 0 = Not available, 1 = Available, 2 = Checked, 3 = Hidden
var keyItemNames = [
"Baron Key",
"Luca Key",
"Magma Key",
"Tower Key",
"Darkness Crystal",
"Earth Crystal",
"Hook",
"Twinharp",
"Package",
"Pan",
"Sandruby",
"Rat Tail",
"Adamant",
"Legend Sword",
"Spoon",
"Pink Tail",
"Crystal",
"Pass"
]
var objectivenames = ['Get Cecil','Get Kain','Get Rydia','Get Tellah','Get Edward','Get Rosa','Get Yang','Get Palom','Get Porom','Get Cid','Get Edge','Get FuSoYa','Defeat D.Mist','Defeat Officer','Defeat Octomamm','Defeat Antlion','Defeat Waterhag (boss version)','Defeat MomBomb','Defeat the Fabul Gauntlet','Defeat Milon','Defeat Milon Z.','Defeat D.Knight','Defeat the Guards (boss)','Defeat Karate','Defeat Baigan','Defeat Kainazzo','Defeat the Dark Elf (dragon form)','Defeat the Magus Sisters','Defeat Valvalis','Defeat Calbrena','Defeat Golbez','Defeat Dr. Lugae','Defeat the Dark Imps (boss)','Defeat K.Eblan and Q.Eblan','Defeat Rubicant','Defeat EvilWall','Defeat Asura','Defeat Leviatan','Defeat Odin','Defeat Bahamut','Defeat Elements','Defeat CPU','Defeat Pale Dim','Defeat Wyvern','Defeat Plague','Defeat the D.Lunars','Defeat Ogopogo','Defeat the boss of the Mist Cave','Defeat the boss of the Waterfall','Complete the Antlion Nest','Rescue the hostage on Mt. Hobs','Defend Fabul','Complete Mt. Ordeals','Defeat the bosses of Baron Inn','Liberate Baron Castle','Complete Cave Magnes','Complete the Tower of Zot','Defeat the bosses of Dwarf Castle','Defeat the boss of Lower Bab-il','Launch the Falcon','Complete the Sealed Cave','Defeat the queen at the Town of Monsters','Defeat the king at the Town of Monsters','Defeat the Baron Castle basement throne','Complete the Giant of Bab-il','Complete Cave Bahamut','Conquer the vanilla Murasame altar','Conquer the vanilla Crystal Sword altar','Conquer the vanilla White Spear altar','Conquer the vanilla Ribbon room','Conquer the vanilla Masamune altar','Burn village Mist with the Package','Cure the fever with the SandRuby','Unlock the sewer with the Baron Key','Break the Dark Elf\'s spell with the TwinHarp','Open the Toroia treasury with the Earth Crystal','Drop the Magma Key into the Agart well','Destroy the Super Cannon','Unlock the Sealed Cave','Raise the Big Whale','Trade away the Rat Tail','Have Kokkol forge Legend Sword with Adamant','Wake Yang with the Pan','Return the Pan to Yang\'s wife','Trade away the Pink Tail','Unlock the Pass door in Toroia'];

var trappedchestcounts = [3,1,1,1,1,1,4,7,1,9];
var trappedchestmaxcounts = [3,1,1,1,1,1,4,7,1,9];
var currentShop = 0;
// Array of checklists of items found in each shop.
var items = ['00000000000000000000000000000000000000','00000000000000000000000000000000000000','00000000000000000000000000000000000000','00000000000000000000000000000000000000','00000000000000000000000000000000000000','00000000000000000000000000000000000000','00000000000000000000000000000000000000','00000000000000000000000000000000000000','00000000000000000000000000000000000000','00000000000000000000000000000000000000','00000000000000000000000000000000000000','00000000000000000000000000000000000000','00000000000000000000000000000000000000'];
var itemsnotes = ['','','','','','','','','','','','',''];

var partymembers = [-1,-1,-1,-1,-1];

var maxitems = 17;

var viewactivekeyitems = true;
var viewactivecharacters = true;
var viewactivetowns = true;
var viewactivetrapped = true;

var cecil = false;
var rydia = false;
var mist = false;
var hookclear = false;
var ignorewarp = false;
var menutoggle = false;

var dmcount = 0;
var objectivechange = 0;

var timerStarted = false;
var timerStartTime;

//NEW NEW FLAGS
var modeflags = {
	omain: true,
	oforge: false,
	ogiant: false,
	ofiends: false,
	odarkmatter: false,
	oquests: false,
	oboss: false,
	ochar: false,
	oreq: '',
	orandomcount: 0,
	owin: 'crystal',
	kmain: false,
	ksummon: false,
	kmoon: false,
	ktrap: false,
	kunsafe: false,
	knofree: false,
    kunsafer: false,
	pshop: false,
	pkey: false,
	pchests: false,
	cvanilla: false,
	cstandard: false,
	crelaxed: false,
	cmaybe: false,
	chero: false,
	cnofree: false,
	cdistinct: 0,
	climit: 5,
	ccecil: true,
	ckain: true,
	crydia: true,
	ctellah: true,
	cedward: true,
	crosa: true,
	cyang: true,
	cpalom: true,
	cporom: true,
	ccid: true,
	cedge: true,
	cfusoya: true,
	cstart: '',
	cjspells: false,
	cjabilities: false,
	cnodupes: false,
	cbye: false,
	cpermajoin: false,
	cpermadeath: false,
	cpermadeader: false,
    cnoearned: false,
	tchests: 'tvanilla',
	tsparse: 0,
	tnoj: false,
	tjunk: false,
	sshops: 'svanilla',
	sunsafe: false,
	sfree: false,
	squarter: false,
	snoj: false,
	snoapples: false,
	snosirens: false,
	snolife: false,
	bvanilla: false,
	bstandard: false,
	bunsafe: false,
	baltgauntlet: false,
	bwhyburn: false,
	bwhichburn: false,
	nbosses: false,
	eencounters: 'evanilla',
	ekeepdoors: false,
	ekeepbehemoths: false,
	edanger: false,
	enosirens: false,
	enojdrops: false,
	ecantrun: false,
	enoexp: false,
	gdupe: false,
	gmp: false,
	gwarp: false,
	glife: false,
	g64: false,
	ostarterkit: '',
	onoadamants: false,
	ovintage: false,
	ospoon: false,
	ovanillafusoya: false,
	ovanillaagility: false,
	ovanillahobs: false,
	ovanillaexp: false,
	oexpsplit: false,
	oexpnoboost: false,
	oexpnokeybonus: false,
	ovanillafashion: false,
	ovanillatraps: false,
	ovanillaz: false,
	opushbtojump: false
}

//NEW FLAGS
var overridestarting = '';

var disableitemtracker = '0';
var disablelocationtracker = '0';
var disablebosstracker = '0';
var disablecharactertracker = '0';
var disableobjectivetracker = '0';
var enableautotracking = '0';
var autotrackingport = '0';
var autotrackingmessage = '';
var autotrackingerror = false;

var partyswap = 0;
var ignoreswap = false;

var flags = getParameterByName('f');
var useBeta = getParameterByName('beta');
var flagsets = flags.split('|');
var flagsReadable = '';
var flagsHeaderStyle = 'style="font-size:1.5rem; border-bottom: 1px white solid;margin-top:5px;color:#6Cf;"';
var excludedCharacters = '';
var includedCharacters = '';

var isMystery = false;

function getParameterByName(name, url) {
	if (!url) url = window.location.href;
	name = name.replace(/[\[\]]/g, "\\$&");
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
		results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, " "));
}				

function SetModes() {
	$('#itemModal').hide();
    $('#flagsModal').hide();
	$('#bossModal').hide();
	$('#townModal').hide();
	$('#objectiveModal').hide();
	$('#mysteryModal').hide();
	
	disableitemtracker = getParameterByName('d');
	
	disableloctracker = getParameterByName('c');

	disablebosstracker = getParameterByName('s');
	
	disablelocationtracker = getParameterByName('l');
	
	disablecharactertracker = getParameterByName('h');
	
	disableobjectivetracker = getParameterByName('o');
	
	if (getParameterByName('a').startsWith('1')) {
		enableautotracking = '1';
		autotrackingport = getParameterByName('a').substr(1);
	} else {
		document.getElementById('autotrackingdiv').style.display = "none";
	}
	
	if (disableloctracker === '1') {
		keyitemlocations = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
		townlocations = [1,1,1,1,1,1,1,1,1,1,1,1,1];
		characterlocations = [1,1,1,1,1,1,1,1,1,1,1,1,1,1];
		trappedchestlocations = [1,1,1,1,1,1,1,1,1,1];
		document.getElementById('keyitemlocation27').style.display = "none";
		document.getElementById('keyitemlocation28').style.display = "none";
	}
	
	if (disablelocationtracker === '1') {
		document.getElementById('trackingtable').style.display = "none";
		document.getElementById('wrapperdiv').style.width = "400px";
		//document.getElementById('datadiv').style.display = "none";
		disablebosstracker = '1';
	}
	
	if (disablecharactertracker === '1') {
		document.getElementById('partydiv').style.display = "none";
		document.getElementById('itemdiv').style.top = "10px";
		//document.getElementById('partyhr').style.display = "none";
		if (disableobjectivetracker === '0') {
			document.getElementById('objectivediv').style.top = "210px";
		}
	}
	
	if (disableobjectivetracker === '1') {
		document.getElementById('objectivediv').style.display = "none";
	}
	
    for (var i = 0; i < 98; i++) {
        document.getElementById('objective' + i).style.display = "flex";
    }

	flags = getParameterByName('f');
	
	flagsets = flags.split('|');
	excludedCharacters = '';
	includedCharacters = '';
    var bAddedMiscHeader = false;
	if (flags === 'MYSTERY') {
		isMystery = true;
		modeflags.orandomcount = 1;
		document.getElementById('changemysteryflagsdiv').style.display = "";
		modeflags.oreq = "?";
		
		for (var j = 0; j < modeflags.orandomcount; j++) {
			objectives[90 + j] = 0;
		}
	} else {
		document.getElementById('changemysteryflagsdiv').style.display = "none";
	
		for (var fs in flagsets) {
			
			//Objectives
			if (flagsets[fs].startsWith('O')) {
                flagsReadable += '<div ' + flagsHeaderStyle + '>' + 'Objectives' + '</div>';
				var flagstring = flagsets[fs].substr(1);
				var keys = flagstring.split('/');
				for (var k in keys) {
                    flagsReadable += keys[k] + (k < keys.length - 1 ? ', ' : '');
					switch (keys[k]) {
						case 'NONE':
							modeflags.kmain = true;
							break;
						default:
							if (keys[k].startsWith('MODE')) {
								var mode = keys[k].substring(5).split(',');
								for (var j in mode) {
									switch (mode[j]) {
										case 'CLASSICFORGE':
											modeflags.oforge = true;
											SetObjectiveEnabled(0,0);
											break;
										case 'CLASSICGIANT':
											modeflags.ogiant = true;
											SetObjectiveEnabled(1,0);
											break;
										case 'FIENDS':
											modeflags.ofiends = true;
											SetObjectiveEnabled(23,0);
											SetObjectiveEnabled(24,0);
											SetObjectiveEnabled(29,0);
											SetObjectiveEnabled(32,0);
											SetObjectiveEnabled(38,0);
											SetObjectiveEnabled(44,0);
											break;
										case 'DKMATTER':
											modeflags.odarkmatter = true;
											SetObjectiveEnabled(3,0);
											//document.getElementById('dkmatterspan').style.display = 'inherit';
											break;
									}
								}
							} else if (keys[k].startsWith('RANDOM')) {
								var randomquests = keys[k].split(',');
								for (var l in randomquests) {
									switch (randomquests[l]) {
										case 'QUEST':
										case 'GATED_QUEST':
											modeflags.oquests = true;
											break;
										case 'BOSS':
											modeflags.oboss = true;
											break;
										case 'CHAR':
											modeflags.ochar = true;
											break;
                                        case 'TOUGH_QUEST':
                                            modeflags.ochar = true;
                                            modeflags.oquests = true;
                                            modeflags.oboss = true;
                                            break;
										default:
											if (randomquests[l].startsWith('RANDOM')) {
												modeflags.orandomcount = randomquests[l].substring(7);
												for (var j = 0; j < modeflags.orandomcount; j++) {
													objectives[90 + j] = 0;
												}
											}
											break;
									}
								}
							} else if (keys[k].startsWith('WIN')) {
								var wincondition = keys[k].substring(4);
								if (wincondition === 'GAME') {
									modeflags.owin = 'game';
									SetObjectiveEnabled(98,0);
									SetObjectiveEnabled(99,2);
								} else {
									modeflags.owin = 'crystal';
									SetObjectiveEnabled(98,2);
									SetObjectiveEnabled(99,0);
								}
							} else if (keys[k].startsWith('REQ')) {
								var questreq = keys[k].substring(4);
								modeflags.oreq = questreq;
							} else {
								var currentkey = keys[k].substr(2).toLowerCase();
								switch (currentkey) {
									case 'char_cecil':
										SetObjectiveEnabled(4,0);
										break;
									case 'char_kain':
										SetObjectiveEnabled(5,0);
										break;
									case 'char_rydia':
										SetObjectiveEnabled(6,0);
										break;
									case 'char_tellah':
										SetObjectiveEnabled(7,0);
										break;
									case 'char_edward':
										SetObjectiveEnabled(8,0);
										break;
									case 'char_rosa':
										SetObjectiveEnabled(9,0);
										break;
									case 'char_yang':
										SetObjectiveEnabled(10,0);
										break;
									case 'char_palom':
										SetObjectiveEnabled(11,0);
										break;
									case 'char_porom':
										SetObjectiveEnabled(12,0);
										break;
									case 'char_cid':
										SetObjectiveEnabled(13,0);
										break;
									case 'char_edge':
										SetObjectiveEnabled(14,0);
										break;
									case 'char_fusoya':
										SetObjectiveEnabled(15,0);
										break;
									case 'boss_dmist':
										SetObjectiveEnabled(16,0);
										break;
									case 'boss_officer':
										SetObjectiveEnabled(17,0);
										break;
									case 'boss_octomamm':
										SetObjectiveEnabled(18,0);
										break;
									case 'boss_antlion':
										SetObjectiveEnabled(19,0);
										break;
									case 'boss_waterhag':
										SetObjectiveEnabled(20,0);
										break;
									case 'boss_mombomb':
										SetObjectiveEnabled(21,0);
										break;
									case 'boss_fabulgauntlet':
										SetObjectiveEnabled(22,0);
										break;
									case 'boss_milon':
										SetObjectiveEnabled(23,0);
										break;
									case 'boss_milonz':
										SetObjectiveEnabled(24,0);
										break;
									case 'boss_mirrorcecil':
										SetObjectiveEnabled(25,0);
										break;
									case 'boss_guard':
										SetObjectiveEnabled(26,0);
										break;
									case 'boss_karate':
										SetObjectiveEnabled(27,0);
										break;
									case 'boss_baigan':
										SetObjectiveEnabled(28,0);
										break;
									case 'boss_kainazzo':
										SetObjectiveEnabled(29,0);
										break;
									case 'boss_darkelf':
										SetObjectiveEnabled(30,0);
										break;
									case 'boss_magus':
										SetObjectiveEnabled(31,0);
										break;
									case 'boss_valvalis':
										SetObjectiveEnabled(32,0);
										break;
									case 'boss_calbrena':
										SetObjectiveEnabled(33,0);
										break;
									case 'boss_golbez':
										SetObjectiveEnabled(34,0);
										break;
									case 'boss_lugae':
										SetObjectiveEnabled(35,0);
										break;
									case 'boss_darkimp':
										SetObjectiveEnabled(36,0);
										break;
									case 'boss_kingqueen':
										SetObjectiveEnabled(37,0);
										break;
									case 'boss_rubicant':
										SetObjectiveEnabled(38,0);
										break;
									case 'boss_evilwall':
										SetObjectiveEnabled(39,0);
										break;
									case 'boss_asura':
										SetObjectiveEnabled(40,0);
										break;
									case 'boss_leviatan':
										SetObjectiveEnabled(41,0);
										break;
									case 'boss_odin':
										SetObjectiveEnabled(42,0);
										break;
									case 'boss_bahamut':
										SetObjectiveEnabled(43,0);
										break;
									case 'boss_elements':
										SetObjectiveEnabled(44,0);
										break;
									case 'boss_cpu':
										SetObjectiveEnabled(45,0);
										break;
									case 'boss_paledim':
										SetObjectiveEnabled(46,0);
										break;
									case 'boss_wyvern':
										SetObjectiveEnabled(47,0);
										break;
									case 'boss_plague':
										SetObjectiveEnabled(48,0);
										break;
									case 'boss_dlunar':
										SetObjectiveEnabled(49,0);
										break;
									case 'boss_ogopogo':
										SetObjectiveEnabled(50,0);
										break;
									case 'quest_mistcave':
										SetObjectiveEnabled(51,0);
										break;
									case 'quest_waterfall':
										SetObjectiveEnabled(52,0);
										break;
									case 'quest_antlionnest':
										SetObjectiveEnabled(53,0);
										break;
									case 'quest_hobs':
										SetObjectiveEnabled(54,0);
										break;
									case 'quest_fabul':
										SetObjectiveEnabled(55,0);
										break;
									case 'quest_ordeals':
										SetObjectiveEnabled(56,0);
										break;
									case 'quest_baroninn':
										SetObjectiveEnabled(57,0);
										break;
									case 'quest_baroncastle':
										SetObjectiveEnabled(58,0);
										break;
									case 'quest_magnes':
										SetObjectiveEnabled(59,0);
										break;
									case 'quest_zot':
										SetObjectiveEnabled(60,0);
										break;
									case 'quest_dwarfcastle':
										SetObjectiveEnabled(61,0);
										break;
									case 'quest_lowerbabil':
										SetObjectiveEnabled(62,0);
										break;
									case 'quest_falcon':
										SetObjectiveEnabled(63,0);
										break;
									case 'quest_sealedcave':
										SetObjectiveEnabled(64,0);
										break;
									case 'quest_monsterqueen':
										SetObjectiveEnabled(65,0);
										break;
									case 'quest_monsterking':
										SetObjectiveEnabled(66,0);
										break;
									case 'quest_baronbasement':
										SetObjectiveEnabled(67,0);
										break;
									case 'quest_giant':
										SetObjectiveEnabled(68,0);
										break;
									case 'quest_cavebahamut':
										SetObjectiveEnabled(69,0);
										break;
									case 'quest_murasamealtar':
										SetObjectiveEnabled(70,0);
										break;
									case 'quest_crystalaltar':
										SetObjectiveEnabled(71,0);
										break;
									case 'quest_whitealtar':
										SetObjectiveEnabled(72,0);
										break;
									case 'quest_ribbonaltar':
										SetObjectiveEnabled(73,0);
										break;
									case 'quest_masamunealtar':
										SetObjectiveEnabled(74,0);
										break;
									case 'quest_burnmist':
										SetObjectiveEnabled(75,0);
										break;
									case 'quest_curefever':
										SetObjectiveEnabled(76,0);
										break;
									case 'quest_unlocksewer':
										SetObjectiveEnabled(77,0);
										break;
									case 'quest_music':
										SetObjectiveEnabled(78,0);
										break;
									case 'quest_toroiatreasury':
										SetObjectiveEnabled(79,0);
										break;
									case 'quest_magma':
										SetObjectiveEnabled(80,0);
										break;
									case 'quest_supercannon':
										SetObjectiveEnabled(81,0);
										break;
									case 'quest_unlocksealedcave':
										SetObjectiveEnabled(82,0);
										break;
									case 'quest_bigwhale':
										SetObjectiveEnabled(83,0);
										break;
									case 'quest_traderat':
										SetObjectiveEnabled(84,0);
										break;
									case 'quest_forge':
										SetObjectiveEnabled(85,0);
										break;
									case 'quest_wakeyang':
										SetObjectiveEnabled(86,0);
										break;
									case 'quest_tradepan':
										SetObjectiveEnabled(87,0);
										break;
									case 'quest_tradepink':
										SetObjectiveEnabled(88,0);
										break;
									case 'quest_pass':
										SetObjectiveEnabled(89,0);
										break;
								}
							}
					}
				}
			}
			
			//Key Items
			if (flagsets[fs].startsWith('K')) {
                flagsReadable += '<div ' + flagsHeaderStyle + '>' + 'Key Items' + '</div>';
				var flagstring = flagsets[fs].substr(1);
				var keys = flagstring.split('/');
				for (var k in keys) {
                    flagsReadable += keys[k] + (k < keys.length - 1 ? ', ' : '');
					switch (keys[k]) {
						case 'MAIN':
							modeflags.kmain = true;
							break;
						case 'SUMMON':
							modeflags.ksummon = true;
							break;
						case 'MOON':
							modeflags.kmoon = true;
							break;
						case 'TRAP':
						case 'MIAB':
							modeflags.ktrap = true;
							break;
						case 'UNSAFE':
							modeflags.kunsafe = true;
							break;
                        case 'UNSAFER':
                            modeflags.kunsafer = true;
                            break;
                        case 'NOFREE':
                            modeflags.knofree = true;
                            modeflags.nkey = true;
                            break;
					}
				}
			}

			//Pass
			if (flagsets[fs].startsWith('P')) {
                flagsReadable += '<div ' + flagsHeaderStyle + '>' + 'Pass Item' + '</div>';
				var flagstring = flagsets[fs].substr(1);
				var keys = flagstring.split('/');
				
				for (var k in keys) {
                    flagsReadable += keys[k] + (k < keys.length - 1 ? ', ' : '');
					switch (keys[k]) {
						case 'SHOP':
							modeflags.pshop = true;
							document.getElementById("passtd").style.display = "block";
							break;
						case 'KEY':
							modeflags.pkey = true;
							break;
						case 'CHESTS':
							modeflags.pchests = true;
							break;
					}
				}
			}
			
            //Challenges
            if (flagsets[fs].startsWith('N')) {
                flagsReadable += '<div ' + flagsHeaderStyle + '>' + 'Challenges' + '</div>';
                var flagstring = flagsets[fs].substr(1);
                var keys = flagstring.split('/');

                for (var k in keys) {
                    flagsReadable += 'No Free ' + keys[k] + (k < keys.length - 1 ? ', ' : '');
                    console.log(keys);
                    switch (keys[k]) {
                        case 'CHARS':
                            modeflags.nchars = true;
                            break;
                        case 'KEY':
                            modeflags.nkey = true;
                            break;
                        case 'BOSSES':
                            modeflags.nbosses = true;
                            break;
                    }
                }
            }


            var cstartstring = '';
			//Characters
			if (flagsets[fs].startsWith('C')) {
                flagsReadable += '<div ' + flagsHeaderStyle + '>' + 'Characters' + '</div>';
				var flagstring = flagsets[fs].substr(1);
				var keys = flagstring.split('/');
				var anystart = false;
				
				for (var k in keys) {
                    flagsReadable += keys[k] + (k < keys.length - 1 ? ', ' : '');
					switch (keys[k]) {
						case 'VANILLA':
							modeflags.cvanilla = true;
							break;
						case 'STANDARD':
							modeflags.cstandard = true;
							break;
						case 'RELAXED':
							modeflags.crelaxed = true;
							break;
						case 'HERO':
							modeflags.chero = true;
							break;
						case 'MAYBE':
							modeflags.cmaybe = true;
							break;
						case 'NOFREE':
							modeflags.cnofree = true;
							modeflags.nchars = true;
							flagsReadable += 'No Free characters';
							break;
						case 'J:SPELLS':
							modeflags.cjspells = true;
							break;
						case 'ABILITIES':
							modeflags.cjabilities = true;
							break;
						case 'NODUPES':
							modeflags.cnodupes = true;
							break;
						case 'BYE':
							modeflags.cbye = true;
							break;
						case 'PERMAJOIN':
							modeflags.cpermajoin = true;
							break;
						case 'PERMADEATH':
							modeflags.cpermadeath = true;
							break;
						case 'PERMADEADER':
							modeflags.cpermadeader = true;
							break;
						default:
							if (keys[k].startsWith('DISTINCT')) {
								modeflags.cdistinct = keys[k].substring(9);
							}
							if (keys[k].startsWith('START')) {
								if (keys[k].substring(6) === 'ANY') {
									anystart = true;
                                } else {
                                    cstartstring = keys[k].substring(6).toUpperCase();
								}
								//modeflags.cstart = keys[k].substring(6);
							}
							if (keys[k].startsWith('PARTY')) {
								modeflags.climit = keys[k].substring(6);
							}                          
                            if (keys[k].startsWith('NOEARNED')) {
                                modeflags.cnoearned = true;
                                flagsReadable += 'No Earned characters';
                            }

							if (keys[k].startsWith('NO')) {
								var cha = keys[k].substring(3).split(',');
								for (var j in cha) {
                                    var characterAvailable = anystart === true || cstartstring.includes(cha[j]);
									switch (cha[j]) {
										case 'CECIL':
                                            modeflags.ccecil = characterAvailable;
											break;
										case 'KAIN':
                                            modeflags.ckain = characterAvailable;
											break;
										case 'RYDIA':
                                            modeflags.crydia = characterAvailable;
											break;
										case 'TELLAH':
                                            modeflags.ctellah = characterAvailable;
											break;
										case 'EDWARD':
                                            modeflags.cedward = characterAvailable;
											break;
										case 'ROSA':
                                            modeflags.crosa = characterAvailable;
											break;
										case 'YANG':
                                            modeflags.cyang = characterAvailable;
											break;
										case 'PALOM':
                                            modeflags.cpalom = characterAvailable;
											break;
										case 'POROM':
                                            modeflags.cporom = characterAvailable;
											break;
										case 'CID':
                                            modeflags.ccid = characterAvailable;
											break;
										case 'EDGE':
                                            modeflags.cedge = characterAvailable;
											break;
										case 'FUSOYA':
                                            modeflags.cfusoya = characterAvailable;
											break;
									}
								}
							}
							
							if (keys[k].startsWith('ONLY')) {								
								modeflags.ccecil = cstartstring.includes('CECIL');
								modeflags.ckain = cstartstring.includes('KAIN');
								modeflags.crydia = cstartstring.includes('RYDIA');
								modeflags.ctellah = cstartstring.includes('TELLAH');
								modeflags.cedward = cstartstring.includes('EDWARD');
								modeflags.crosa = cstartstring.includes('ROSA');
								modeflags.cyang = cstartstring.includes('YANG');
								modeflags.cpalom = cstartstring.includes('PALOM');
								modeflags.cporom = cstartstring.includes('POROM');
								modeflags.ccid = cstartstring.includes('CID');
								modeflags.cedge = cstartstring.includes('EDGE');
								modeflags.cfusoya = cstartstring.includes('FUSOYA');
								
								var cha = keys[k].substring(5).split(',');
								for (var j in cha) {
									switch (cha[j]) {
										case 'CECIL':
											modeflags.ccecil = true;
											break;
										case 'KAIN':
											modeflags.ckain = true;
											break;
										case 'RYDIA':
											modeflags.crydia = true;
											break;
										case 'TELLAH':
											modeflags.ctellah = true;
											break;
										case 'EDWARD':
											modeflags.cedward = true;
											break;
										case 'ROSA':
											modeflags.crosa = true;
											break;
										case 'YANG':
											modeflags.cyang = true;
											break;
										case 'PALOM':
											modeflags.cpalom = true;
											break;
										case 'POROM':
											modeflags.cporom = true;
											break;
										case 'CID':
											modeflags.ccid = true;
											break;
										case 'EDGE':
											modeflags.cedge = true;
											break;
										case 'FUSOYA':
											modeflags.cfusoya = true;
											break;
									}
								}
							}
					}
				}
			}		
			
			//Treasures
			if (flagsets[fs].startsWith('T')) {
                flagsReadable += '<div ' + flagsHeaderStyle + '>' + 'Treasure Chests' + '</div>';
				var flagstring = flagsets[fs].substr(1);
				var keys = flagstring.split('/');
				
				for (var k in keys) {
                    flagsReadable += keys[k] + (k < keys.length - 1 ? ', ' : '');
					switch (keys[k]) {
						case 'VANILLA':
							modeflags.tchests = 'vanilla';
							break;
						case 'SHUFFLE':
							modeflags.tchests = 'shuffle';
							break;
						case 'STANDARD':
							modeflags.tchests = 'standard';
							break;
						case 'PRO':
							modeflags.tchests = 'pro';
							break;
						case 'WILD':
							modeflags.tchests = 'wild';
							break;
						case 'WILDISH':
							modeflags.tchests = 'wildish';
							break;
						case 'EMPTY':
							modeflags.tchests = 'empty';
							break;
						case 'NO:J':
							modeflags.tnoj = true;
							break;
						case 'JUNK':
							modeflags.tjunk = true;
							break;
						default:
							if (keys[k].startsWith('SPARSE')) {
								modeflags.tsparse = keys[k].substr(7);
							}
					}
				}
			}
			
			//Shops
			if (flagsets[fs].startsWith('S')) {
                flagsReadable += '<div ' + flagsHeaderStyle + '>' + 'Shops' + '</div>';
				var flagstring = flagsets[fs].substr(1).replace(',','/');
				while (flagstring.indexOf(',') > -1) {
					flagstring = flagstring.replace(',','/');
				}
				var keys = flagstring.split('/');
				
				for (var k in keys) {
                    flagsReadable += keys[k] + (k < keys.length - 1 ? ', ' : '');
					switch (keys[k]) {
						case 'VANILLA':
							modeflags.sshops = 'vanilla';
							break;
						case 'SHUFFLE':
							modeflags.sshops = 'shuffle';
							break;
						case 'STANDARD':
							modeflags.sshops = 'standard';
							break;
						case 'PRO':
							modeflags.sshops = 'pro';
							break;
						case 'WILD':
							modeflags.sshops = 'wild';
							break;
						case 'CABINS':
							modeflags.sshops = 'cabins';
							break;
						case 'EMPTY':
							modeflags.sshops = 'empty';
							break;
						case 'FREE':
							modeflags.sfree = true;
							break;
						case 'QUARTER':
							modeflags.squarter = true;
							break;
						case 'NO:J':
							modeflags.snoj = true;
							break;
						case 'NO:APPLES':
						case 'APPLES':
							modeflags.snoapples = true;
							break;
						case 'NO:SIRENS':
						case 'SIRENS':
							modeflags.snosirens = true;
							break;
						case 'NO:LIFE':
						case 'LIFE':
							modeflags.snolife = true;
							break;
						case 'UNSAFE':
							modeflags.sunsafe = true;
							break;
					}
				}
			}
			
			//Bosses
			if (flagsets[fs].startsWith('B')) {
                flagsReadable += '<div ' + flagsHeaderStyle + '>' + 'Bosses' + '</div>';
				var flagstring = flagsets[fs].substr(1);
				var keys = flagstring.split('/');
				
				for (var k in keys) {
                    flagsReadable += keys[k] + (k < keys.length - 1 ? ', ' : '');
					switch (keys[k]) {
						case 'VANILLA':
							modeflags.bvanilla = true;
							break;
						case 'STANDARD':
							modeflags.bstandard = true;
							break;
						case 'UNSAFE':
							modeflags.bunsafe = true;
							break;
						case 'ALT:GAUNTLET':
							modeflags.baltgauntlet = true;
							break;
						case 'WHYBURN':
							modeflags.bwhyburn = true;
							break;
						case 'WHICHBURN':
							modeflags.bwhichburn = true;
							break;
                        case 'NOFREE':
                            modeflags.nbosses = true;
					}
				}
			}
			


			//Encounters
			if (flagsets[fs].startsWith('E')) {
                flagsReadable += '<div ' + flagsHeaderStyle + '>' + 'Encounters' + '</div>';
				var flagstring = flagsets[fs].substr(1);
				var keys = flagstring.split('/');
				
				for (var k in keys) {
                    flagsReadable += keys[k] + (k < keys.length - 1 ? ', ' : '');
					switch (keys[k]) {
						case 'VANILLA':
							modeflags.eencounters = 'evanilla';
							break;
						case 'TOGGLE':
							modeflags.eencounters = 'etoggle';
							break;
						case 'REDUCE':
							modeflags.eencounters = 'ereduce';
							break;
						case 'NOENCOUNTERS':
							modeflags.eencounters = 'enoencounters';
							break;
						case 'KEEP:DOORS':
							modeflags.ekeepdoors = true;
							break;
						case 'KEEP:BEHEMOTHS':
						case 'BEHEMOTHS':
							modeflags.ekeepbehemoths = true;
							break;
						case 'DANGER':
							modeflags.edanger = true;
							break;
						case 'NO:SIRENS':
							modeflags.enosirens = true;
							break;
						case 'NO:JDROPS':
							modeflags.enojdrops = true;
							break;
						case 'CANTRUN':
							modeflags.ecantrun = true;
							break;
						case 'NOEXP':
							modeflags.enoexp = true;
							break;
					}
				}
			}
			
			//Glitches
			if (flagsets[fs].startsWith('G')) {
                flagsReadable += '<div ' + flagsHeaderStyle + '>' + 'Glitches' + '</div>';
				var flagstring = flagsets[fs].substr(1);
				var keys = flagstring.split('/');
				
				for (var k in keys) {
                    flagsReadable += keys[k] + (k < keys.length - 1 ? ', ' : '');
					switch (keys[k]) {
						case 'DUPE':
							modeflags.gdupe = true;
							break;
						case 'MP':
							modeflags.gmp = true;
							break;
						case 'WARP':
							modeflags.gwarp = true;
							break;
						case 'LIFE':
							modeflags.glife = true;
							break;
						case '64':
							modeflags.g64 = true;
							break;
					}
				}
			}
			
            // Item kits			
            if (flagsets[fs].startsWith('-KIT')) {
                flagsReadable += '<div ' + flagsHeaderStyle + '>' + 'ITEM KITS' + '</div>';
                var flagstring = flagsets[fs].split(/-KIT[0-9]?:/);
                flagsReadable += flagstring[1];

                switch (flagstring) {
                    case 'MINIMAL':
						modeflags.ostarterkit = 'minimal';
						break;
                    case 'BASIC':
						modeflags.ostarterkit = 'basic';
						break;
                    case 'BETTER':
						modeflags.ostarterkit = 'better';
						break;
                    case 'LOADED':
						modeflags.ostarterkit = 'loaded';
						break;
                    case 'SPITBALL':
						modeflags.ostarterkit = 'spitball';
						break;
                }
            }

            //Wacky 
            else if (flagsets[fs].startsWith('-WACKY')) {
                flagsReadable += '<div ' + flagsHeaderStyle + '>' + 'Wacky' + '</div>';
                var flagstring = flagsets[fs].substr(6);
                flagsReadable += flagstring;
                switch (flagstring) {
                    case 'NIGHTMODE':
                        flagsReadable += 'Overworld shops are closed (except Baron weapon/armor and Toroia cafe item). Outdoor maps in the overworld use a darkened color palette.'
                        break;
                }
            }
            //Other
            else if (flagsets[fs].startsWith('-')) {
                if (!bAddedMiscHeader) {
                    bAddedMiscHeader = true
                    flagsReadable += '<div ' + flagsHeaderStyle + '>' + 'MISC' + '</div>';
                }

                flagsReadable += flagsets[fs].substr(1) + ', ';
                switch (flagsets[fs]) {
					case '-NOADAMANTS':
						modeflags.onoadamants = true;
						break;
					case '-VINTAGE':
						modeflags.ovintage = true;
						break;
					case '-SPOON':
						modeflags.ospoon = true;
						break;
					case '-PUSHBTOJUMP':
						modeflags.opushbtojump = true;
						break;
					default:
						if (flagsets[fs].startsWith('-VANILLA:')) {
							var flagstring = flagsets[fs].substr(9).replace('/', ',');
							var keys = flagstring.split(',');
							for (var k in keys) {
								switch (keys[k]) {
									case 'FUSOYA':
										modeflags.ovanillafusoya = true;
										break;
									case 'AGILITY':
										modeflags.ovanillaagility = true;
										break;
									case 'HOBS':
										modeflags.ovanillahobs = true;
										break;
									case 'FASHION':
										modeflags.ovanillafashion = true;
										break;
									case 'TRAPS':
										modeflags.ovanillatraps = true;
										break;
									case 'Z':
										modeflags.ovanillaz = true;
										break;
								}
							}
						}
						
						if (flagsets[fs].startsWith('-EXP:')) {
							var flagstring = flagsets[fs].substr(5).replace('/', ',');
							var keys = flagstring.split(',');
							for (var k in keys) {
								switch (keys[k]) {
									case 'SPLIT':
										modeflags.oexpsplit = true;
										break;
									case 'NOBOOST':
										modeflags.oexpnoboost = true;
										break;
									case 'NOKEYBONUS':
										modeflags.oexpnokeybonus = true;
										break;
								}
							}
						}					
						break;
				}
			}
		}
	
	}
	SetFlagOptions();
	
	SetObjectives();
}

function httpGetAsync(theUrl, callback) {
    fetch(theUrl)
        .then((response) => {
            console.log(response);
            return response.json();
        })
        .then((myJson) => {
            callback(myJson);
        }).catch((error) => {
            console.log(error)
        });
}

function SetupFlagProps() {
    console.log("Setting up flag props");
    var query = '/draft/flagstring?validate=' + flags.replace(/\|/gi, " ")
    if (useBeta != "false") {
        query += '&useBetaChanges';
    }

    httpGetAsync(query, (response) => {
        console.log(response['data']['cardDefs'])
        flagsReadable = ""
        lastCategory = "";
        flagCount = 0;
        for (let i = 0; i < response['data']['cardDefs'].length; i++) {
            var cardDef = response['data']['cardDefs'][i];
            if (lastCategory != cardDef['category']) {
                lastCategory = cardDef['category'];
                flagCount = 0;
                flagsReadable += '<div ' + flagsHeaderStyle + '>' + cardDef['category'] + '</div>';
            }
            flagsReadable += (flagCount >= 1 ? ", " : "") + cardDef['name'];
            flagCount++;
        }
        document.getElementById('keyString').innerHTML = flagsReadable;
    })
    document.getElementById('keyString').innerHTML = flagsReadable;
}

function SetFlagOptions() {

    SetupFlagProps();

	//Limit Party
	if (modeflags.climit < 5) {
		document.getElementById('party4').style.visibility = 'hidden';
	}
	if (modeflags.climit < 4) {
		document.getElementById('party3').style.visibility = 'hidden';
	}
	if (modeflags.climit < 3) {
		document.getElementById('party2').style.visibility = 'hidden';
	}
	if (modeflags.climit < 2) {
		document.getElementById('party1').style.visibility = 'hidden';
	}
	
	if (!modeflags.chero) {

		if (!modeflags.ccecil) {
			document.getElementById('character0').style.opacity = '0.2';
			document.getElementById('character0_x').style.visibility = 'visible';
			excludedCharacters += 'Cecil ';
		}
		if (!modeflags.ckain) {
			document.getElementById('character1').style.opacity = '0.2';
			document.getElementById('character1_x').style.visibility = 'visible';
			excludedCharacters += 'Kain ';
		}
		if (!modeflags.crydia) {
			document.getElementById('character2').style.opacity = '0.2';
			document.getElementById('character2_x').style.visibility = 'visible';
			excludedCharacters += 'Rydia ';
		}
		if (!modeflags.ctellah) {
			document.getElementById('character3').style.opacity = '0.2';
			document.getElementById('character3_x').style.visibility = 'visible';
			excludedCharacters += 'Tellah ';
		}
		if (!modeflags.cedward) {
			document.getElementById('character4').style.opacity = '0.2';
			document.getElementById('character4_x').style.visibility = 'visible';
			excludedCharacters += 'Edward ';
		}
		if (!modeflags.crosa) {
			document.getElementById('character5').style.opacity = '0.2';
			document.getElementById('character5_x').style.visibility = 'visible';
			excludedCharacters += 'Rosa ';
		}
		if (!modeflags.cyang) {
			document.getElementById('character6').style.opacity = '0.2';
			document.getElementById('character6_x').style.visibility = 'visible';
			excludedCharacters += 'Yang ';
		}
		if (!modeflags.cpalom) {
			document.getElementById('character7').style.opacity = '0.2';
			document.getElementById('character7_x').style.visibility = 'visible';
			excludedCharacters += 'Palom ';
		}
		if (!modeflags.cporom) {
			document.getElementById('character8').style.opacity = '0.2';
			document.getElementById('character8_x').style.visibility = 'visible';
			excludedCharacters += 'Porom ';
		}
		if (!modeflags.ccid) {
			document.getElementById('character9').style.opacity = '0.2';
			document.getElementById('character9_x').style.visibility = 'visible';
			excludedCharacters += 'Cid ';
		}
		if (!modeflags.cedge) {
			document.getElementById('character10').style.opacity = '0.2';
			document.getElementById('character10_x').style.visibility = 'visible';
			excludedCharacters += 'Edge ';
		}
		if (!modeflags.cfusoya) {
			document.getElementById('character11').style.opacity = '0.2';
			document.getElementById('character11_x').style.visibility = 'visible';
			excludedCharacters += 'FuSoYa ';
		}
			
		document.getElementById('heroHeaderDiv').style.display = 'none';
		document.getElementById('party0').classList.remove('hero');
	} else {
		document.getElementById('heroHeaderDiv').style.display = '';
		document.getElementById('party0').classList.add('hero');
	}	
	
	switch (overridestarting) {
		case 'CECIL':
			document.getElementById('character0_x').style.visibility = 'hidden';
			document.getElementById('party0').style = 'background-image: url(\'images/character0_a.png\')';
			break;
		case 'KAIN':
			document.getElementById('character1_x').style.visibility = 'hidden';
			document.getElementById('party0').style = 'background-image: url(\'images/character1_a.png\')';
			break;
		case 'RYDIA':
			document.getElementById('character2_x').style.visibility = 'hidden';
			document.getElementById('party0').style = 'background-image: url(\'images/character2_a.png\')';
			break;
		case 'TELLAH':
			document.getElementById('character3_x').style.visibility = 'hidden';
			document.getElementById('party0').style = 'background-image: url(\'images/character3_a.png\')';
			break;
		case 'EDWARD':
			document.getElementById('character4_x').style.visibility = 'hidden';
			document.getElementById('party0').style = 'background-image: url(\'images/character4_a.png\')';
			break;
		case 'ROSA':
			document.getElementById('character5_x').style.visibility = 'hidden';
			document.getElementById('party0').style = 'background-image: url(\'images/character5_a.png\')';
			break;
		case 'YANG':
			document.getElementById('character6_x').style.visibility = 'hidden';
			document.getElementById('party0').style = 'background-image: url(\'images/character6_a.png\')';
			break;
		case 'PALOM':
			document.getElementById('character7_x').style.visibility = 'hidden';
			document.getElementById('party0').style = 'background-image: url(\'images/character7_a.png\')';
			break;
		case 'POROM':
			document.getElementById('character8_x').style.visibility = 'hidden';
			document.getElementById('party0').style = 'background-image: url(\'images/character8_a.png\')';
			break;
		case 'CID':
			document.getElementById('character9_x').style.visibility = 'hidden';
			document.getElementById('party0').style = 'background-image: url(\'images/character9_a.png\')';
			break;
		case 'EDGE':
			document.getElementById('character10_x').style.visibility = 'hidden';
			document.getElementById('party0').style = 'background-image: url(\'images/character10_a.png\')';
			break;
		case 'FUSOYA':
			document.getElementById('character11_x').style.visibility = 'hidden';
			document.getElementById('party0').style = 'background-image: url(\'images/character11_a.png\')';
			break;
	}
	
	if (modeflags.ccecil) {
		includedCharacters += 'Cecil ';
	}
	if (modeflags.ckain) {
		includedCharacters += 'Kain ';
	}
	if (modeflags.crydia) {
		includedCharacters += 'Rydia ';
	}
	if (modeflags.ctellah) {
		includedCharacters += 'Tellah ';
	}
	if (modeflags.cedward) {
		includedCharacters += 'Edward ';
	}
	if (modeflags.crosa) {
		includedCharacters += 'Rosa ';
	}
	if (modeflags.cyang) {
		includedCharacters += 'Yang ';
	}
	if (modeflags.cpalom) {
		includedCharacters += 'Palom ';
	}
	if (modeflags.cporom) {
		includedCharacters += 'Porom ';
	}
	if (modeflags.ccid) {
		includedCharacters += 'Cid ';
	}
	if (modeflags.cedge) {
		includedCharacters += 'Edge ';
	}
	if (modeflags.cfusoya) {
		includedCharacters += 'FuSoYa ';
	} 
	
	if (modeflags.oquests === true || modeflags.oboss === true || modeflags.ochar === true) {
		if (modeflags.oquests === false) {
			document.getElementById('objectivecategoryquestsspan').style.textDecoration = "line-through";
			document.getElementById('objectivecategoryquestsspan').style.cursor = "no-drop";
		} else {
			document.getElementById('objectivecategoryquestsspan').style.textDecoration = "none";
			document.getElementById('objectivecategoryquestsspan').style.cursor = "pointer";
		}
		
		if (modeflags.oboss === false) {
			document.getElementById('objectivecategorybossspan').style.textDecoration = "line-through";
			document.getElementById('objectivecategorybossspan').style.cursor = "no-drop";
		} else {
			document.getElementById('objectivecategorybossspan').style.textDecoration = "none";
			document.getElementById('objectivecategorybossspan').style.cursor = "pointer";
		}
		
		if (modeflags.ochar === false) {
			document.getElementById('objectivecategorycharacterspan').style.textDecoration = "line-through";
			document.getElementById('objectivecategorycharacterspan').style.cursor = "no-drop";
		} else {
			document.getElementById('objectivecategorycharacterspan').style.textDecoration = "none";
			document.getElementById('objectivecategorycharacterspan').style.cursor = "pointer";
		}
	} else {
		modeflags.oquests = true;
		modeflags.oboss = true;
		modeflags.ochar = true;
	}
	
	if (modeflags.oreq != "") {
		//document.getElementById('objectivesRequired').style.display = "";
		document.getElementById('objectivesRequiredCount').innerHTML = modeflags.oreq;
	}
	
	if (!modeflags.ktrap) {
		document.getElementById('trappedchestsdiv').style.display = "none";
		document.getElementById('keyitemsdiv').style.width = "160px";
		document.getElementById('charactersdiv').style.width = "160px";
		document.getElementById('townsdiv').style.width = "160px";
	}
	
	if (modeflags.ktrap && !modeflags.kmoon) {
		trappedchestlocations[9] = 2;
	}

	if (!modeflags.ksummon) {
		keyitemlocations[KeyItemCheck.BARON_ODIN] = 3; //Odin
		keyitemlocations[KeyItemCheck.FEY_ASURA] = 3; //Asura
		keyitemlocations[KeyItemCheck.FEY_LEVIATHAN] = 3; //Leva
		keyitemlocations[KeyItemCheck.SYLPH_CAVE] = 3; //Slyph
		keyitemlocations[KeyItemCheck.BAHAMUT] = 3; //Bahamut
	}
	
	if (!modeflags.kmoon) {
		keyitemlocations[KeyItemCheck.MOON_CRYSTAL] = 3; //Lunar Crystal
		keyitemlocations[KeyItemCheck.MOON_MASAMUNE] = 3; //Lunar Masa
		keyitemlocations[KeyItemCheck.MOON_MURASAME] = 3; //Lunar Mura
		keyitemlocations[KeyItemCheck.MOON_RIBBON] = 3; //Lunar Ribbon
		keyitemlocations[KeyItemCheck.MOON_WHITE] = 3; //Lunar White
	}
	
	/* if (modeflags.snoj) {
	}
	
	if (modeflags.snolife) {
		document.getElementById('lifetd').style.cursor = "not-allowed";
		document.getElementById('itemspan1').style.cursor = "not-allowed";
		document.getElementById('itemspan1').onclick = function() { return false; }
	}
	
	if (modeflags.snoapples) {
		document.getElementById('appletd').style.cursor = "not-allowed";
		document.getElementById('itemspan28').style.cursor = "not-allowed";
		document.getElementById('itemspan29').style.cursor = "not-allowed";
		document.getElementById('itemspan28').onclick = function() { return false; }
		document.getElementById('itemspan29').onclick = function() { return false; }
	}
	
	if (modeflags.snosirens) {
		document.getElementById('sirentd').style.cursor = "not-allowed";
		document.getElementById('itemspan26').style.cursor = "not-allowed";
		document.getElementById('itemspan26').onclick = function() { return false; }
	} */
	
	if (modeflags.nchars) {
		characterlocations[CharacterCheck.DAMCYAN] = 3;
		characterlocations[CharacterCheck.MT_ORDEALS] = 3;
		characterlocations[CharacterCheck.MYSIDIA] = 3;
		characterlocations[CharacterCheck.WATERWAY] = 3;
	}

	if (modeflags.cnoearned) {
		characterlocations[CharacterCheck.MIST] = 3;
		characterlocations[CharacterCheck.KAIPO] = 3;
		characterlocations[CharacterCheck.MT_HOBS] = 3;
		characterlocations[CharacterCheck.BARON_CASTLE] = 3;
		characterlocations[CharacterCheck.BARON_INN] = 3;
		characterlocations[CharacterCheck.TOWER_ZOT] = 3;
		characterlocations[CharacterCheck.DWARF] = 3;
		characterlocations[CharacterCheck.EBLAN_CAVE] = 3;
		characterlocations[CharacterCheck.MOON] = 3;
		characterlocations[CharacterCheck.GIANT_BABIL] = 3;

	}

    if (modeflags.nkey) {
		keyitemlocations[KeyItemCheck.TOROIA] = 3;
	} else {
		if (disablebosstracker === '1') {
			document.getElementById('misttoggle').style.visibility = "hidden";
		}
		keyitemlocations[KeyItemCheck.MIST] = 3;
	}

	var verticallayout = getParameterByName('v');
	
	if (verticallayout === '1' && disablelocationtracker === '0') {
		document.getElementById('wrapperdiv').style.width = "490px";
		document.getElementById('trackingtable').style.top = "430px";
		document.getElementById('trackingtable').style.left = "0px";
		//document.getElementById('trackingtable').style.marginLeft = "20px";
		document.getElementById('leftdiv').style.margin = "0px 0px 20px 60px";
		document.getElementById('itemModalInner').style.left = "34px";
		document.getElementById('itemModalInner').style.top = "460px";
		document.getElementById('objectiveModalInner').style.left = "36px";
		//document.getElementById('objectiveModalInner').style.top = "460px";
		document.getElementById('townModalInner').style.left = "34px";
		document.getElementById('townModalInner').style.top = "460px";
		document.getElementById('bossModalInner').style.left = "34px";
		document.getElementById('mysteryModalInner').style.left = "34px";
        document.getElementById('flagsModalInner').style.left = "34px";
		
	}
	
	var totalobj = 0
	
	for (var i = 0; i < 98; i++) {
		if (objectives[i] === 0) {
			totalobj++;
		}
	}

    if (modeflags.odarkmatter) {
		// Dark matter hunt takes two rows - dark matter count and objective completion.
		// Don't need to do similar for fiends, it sets six separate objectives.
		totalobj++;
	}
	
	if (disableitemtracker === '1') {
		document.getElementById('townsdiv').style.display = "none";
		//document.getElementById('trackingtable').style.fontSize = "24px";
		document.getElementById('keyitemsdiv').style.width = "160px";
		document.getElementById('charactersdiv').style.width = "160px";
	}
	
	var browser = getParameterByName('b');
	
	if (browser === '1') {
		//if (verticallayout === '0') {
			//document.getElementById('flagstr').style.height = "70px";
			//document.getElementById('flagstr').style.verticalAlign = "text-top";
		//}
		document.getElementById('itemModal').style.fontSize = "22px";
		document.getElementById('objectiveModalInner').style.fontSize = "18px";
	} else if (browser === '2') {
		//var hrItems = document.getElementsByTagName("hr");

		//for(var i = 0; i < hrItems.length; i++) {
			//hrItems[i].style.marginTop = '10px';
			//hrItems[i].style.marginBottom = '10px';
		//}
	}	
	
}


function ApplyChecks(){
    var hasunderworldaccess = (keyitems[KeyItem.MAGMA_KEY] >= 1 || ((keyitems[KeyItem.HOOK] >= 1 || modeflags.opushbtojump) && hookclear === true));
	
	// ****Key Items****
	if (disableloctracker === '0') {
		//Adamant Cave
		DeactivateKeyItemLocation(KeyItemCheck.ADAMANT);
        if (keyitems[KeyItem.HOOK] >= 1 && keyitems[KeyItem.RAT_TAIL] >= 1) {
			ActivateKeyItemLocation(KeyItemCheck.ADAMANT);
		}
		
		//Antlion Cave
		ActivateKeyItemLocation(KeyItemCheck.ANTLION);
		
		//Baron Castle [King]
		DeactivateKeyItemLocation(KeyItemCheck.BARON_KING);
        if (keyitems[KeyItem.BARON_KEY] >= 1 || modeflags.opushbtojump) {
			ActivateKeyItemLocation(KeyItemCheck.BARON_KING);
		}
		
		//Baron Castle [Odin]
		DeactivateKeyItemLocation(KeyItemCheck.BARON_ODIN);
        if (keyitems[KeyItem.BARON_KEY] >= 1 || modeflags.opushbtojump) {
			ActivateKeyItemLocation(KeyItemCheck.BARON_ODIN);
		}
		
		//Town of Baron
		ActivateKeyItemLocation(KeyItemCheck.BARON_INN);

		//Fabul [Defend]
		ActivateKeyItemLocation(KeyItemCheck.FABUL_DEFEND);

		//Fabul [Yang/Slyph]
		DeactivateKeyItemLocation(KeyItemCheck.FABUL_SYLPH);
		if (hasunderworldaccess) {
			ActivateKeyItemLocation(KeyItemCheck.FABUL_SYLPH);
		}

		//Fabul [Yang/Pan]
		DeactivateKeyItemLocation(KeyItemCheck.FABUL_PAN);
        if (keyitems[KeyItem.PAN] >= 1 && hasunderworldaccess) {
			ActivateKeyItemLocation(KeyItemCheck.FABUL_PAN);
		}

		//Magnes Cave
		DeactivateKeyItemLocation(KeyItemCheck.MAGNES);
        if (keyitems[KeyItem.TWINHARP] >= 1 || modeflags.opushbtojump) {
			ActivateKeyItemLocation(KeyItemCheck.MAGNES);
		}
		
		//Mist Village
		DeactivateKeyItemLocation(KeyItemCheck.MIST);
		if (mist === true) {
			ActivateKeyItemLocation(KeyItemCheck.MIST);
		}	

		//Mt Ordeals
		ActivateKeyItemLocation(KeyItemCheck.MT_ORDEALS);
		
		if (keyitemlocations[KeyItemCheck.MT_ORDEALS] === 2) {
			cecil = true;
		} else {
			cecil = false;
		}

		//Tower of Zot
		DeactivateKeyItemLocation(KeyItemCheck.TOWER_ZOT);
        if (keyitems[KeyItem.EARTH_CRYSTAL] >= 1 || modeflags.opushbtojump) {
			ActivateKeyItemLocation(KeyItemCheck.TOWER_ZOT);
		}	

		//Toroia Castle
		ActivateKeyItemLocation(KeyItemCheck.TOROIA);
		
		//Dwarf Castle
		DeactivateKeyItemLocation(KeyItemCheck.DWARF);
		if (hasunderworldaccess) {
			ActivateKeyItemLocation(KeyItemCheck.DWARF);
		}	
		
		//Feymarch [Chest]
		DeactivateKeyItemLocation(KeyItemCheck.FEY_CHEST);
		if (hasunderworldaccess) {
			ActivateKeyItemLocation(KeyItemCheck.FEY_CHEST);
		}	
		
		//Feymarch [Asura]
		DeactivateKeyItemLocation(KeyItemCheck.FEY_ASURA);
		if (hasunderworldaccess) {
			ActivateKeyItemLocation(KeyItemCheck.FEY_ASURA);
		}

		//Feymarch [Leviathan]
		DeactivateKeyItemLocation(KeyItemCheck.FEY_LEVIATHAN);
		if (hasunderworldaccess) {
			ActivateKeyItemLocation(KeyItemCheck.FEY_LEVIATHAN);
		}
		
		//Lower Babil [Boss]
		DeactivateKeyItemLocation(KeyItemCheck.LOWER_BABIL_BOSS);
		if (hasunderworldaccess) {
			ActivateKeyItemLocation(KeyItemCheck.LOWER_BABIL_BOSS);
		}
		
		//Lower Babil [Tower]
		DeactivateKeyItemLocation(KeyItemCheck.LOWER_BABIL_CANNON);
        if (keyitems[KeyItem.TOWER_KEY] >= 1 && hasunderworldaccess) {
			ActivateKeyItemLocation(KeyItemCheck.LOWER_BABIL_CANNON);
		}
		
		//Sealed Cave
		DeactivateKeyItemLocation(KeyItemCheck.SEALED_CAVE);
        if (keyitems[KeyItem.LUCA_KEY] >= 1 && hasunderworldaccess) {
			ActivateKeyItemLocation(KeyItemCheck.SEALED_CAVE);
		}
		
		//Slyph Cave
		DeactivateKeyItemLocation(KeyItemCheck.SYLPH_CAVE);
        if (keyitems[KeyItem.PAN] >= 1 && hasunderworldaccess) {
			ActivateKeyItemLocation(KeyItemCheck.SYLPH_CAVE);
		}
		
		//Bahamut
		DeactivateKeyItemLocation(KeyItemCheck.BAHAMUT);
        if (keyitems[KeyItem.DARKNESS_CRYSTAL] >= 1) {
			ActivateKeyItemLocation(KeyItemCheck.BAHAMUT);
		}
		
		//Lunar [Crystal]
		DeactivateKeyItemLocation(KeyItemCheck.MOON_CRYSTAL);
        if (keyitems[KeyItem.DARKNESS_CRYSTAL] >= 1) {
			ActivateKeyItemLocation(KeyItemCheck.MOON_CRYSTAL);
		}
		
		//Lunar [Masamune]
		DeactivateKeyItemLocation(KeyItemCheck.MOON_MASAMUNE);
        if (keyitems[KeyItem.DARKNESS_CRYSTAL] >= 1) {
			ActivateKeyItemLocation(KeyItemCheck.MOON_MASAMUNE);
		}
		
		//Lunar [Murasame]
		DeactivateKeyItemLocation(KeyItemCheck.MOON_MURASAME);
        if (keyitems[KeyItem.DARKNESS_CRYSTAL] >= 1) {
			ActivateKeyItemLocation(KeyItemCheck.MOON_MURASAME);
		}
		
		//Lunar [Ribbon]
		DeactivateKeyItemLocation(KeyItemCheck.MOON_RIBBON);
        if (keyitems[KeyItem.DARKNESS_CRYSTAL] >= 1) {
			ActivateKeyItemLocation(KeyItemCheck.MOON_RIBBON);
		}
		
		//Lunar [White]
		DeactivateKeyItemLocation(KeyItemCheck.MOON_WHITE);
        if (keyitems[KeyItem.DARKNESS_CRYSTAL] >= 1) {
			ActivateKeyItemLocation(KeyItemCheck.MOON_WHITE);
		}
		
		//Hook Route
		DeactivateKeyItemLocation(KeyItemCheck.HOOK_ROUTE);
        if ((keyitems[KeyItem.HOOK] >= 1 || modeflags.opushbtojump) && keyitems[KeyItem.MAGMA_KEY] === 0 && hookclear === false) {
			ActivateKeyItemLocation(KeyItemCheck.HOOK_ROUTE);
		}
		
		// ****Characters****
		
		//Baron Castle
		DeactivateCharacterLocation(CharacterCheck.BARON_CASTLE);
        if (keyitems[KeyItem.BARON_KEY] >= 1 || modeflags.opushbtojump) {
			ActivateCharacterLocation(CharacterCheck.BARON_CASTLE);
		}
		
		//Town of Baron
		ActivateCharacterLocation(CharacterCheck.BARON_INN);
		
		//Damcyan
		ActivateCharacterLocation(CharacterCheck.DAMCYAN);
		
		//Eblan Cave
		DeactivateCharacterLocation(CharacterCheck.EBLAN_CAVE);
        if (keyitems[KeyItem.HOOK] >= 1 || modeflags.opushbtojump) {
			ActivateCharacterLocation(CharacterCheck.EBLAN_CAVE);
		}	
		
		//Giant of Babil
		DeactivateCharacterLocation(CharacterCheck.GIANT_BABIL);
        if (keyitems[KeyItem.DARKNESS_CRYSTAL] >= 1) {
			ActivateCharacterLocation(CharacterCheck.GIANT_BABIL);
		}
		
		//Kaipo
		DeactivateCharacterLocation(CharacterCheck.KAIPO);
        if (keyitems[KeyItem.SANDRUBY] >= 1) {
			ActivateCharacterLocation(CharacterCheck.KAIPO);
		}
		
		//Mist Village
		DeactivateCharacterLocation(CharacterCheck.MIST);
        if (keyitems[KeyItem.PACKAGE] >= 1) {
			ActivateCharacterLocation(CharacterCheck.MIST);
		}
		
		//Mt Hobbs
		ActivateCharacterLocation(CharacterCheck.MT_HOBS);

		//Mt Ordeals
		ActivateCharacterLocation(CharacterCheck.MT_ORDEALS);
		
		//Mysidia
		ActivateCharacterLocation(CharacterCheck.MYSIDIA);
		
		//Tower of Zot
		DeactivateCharacterLocation(CharacterCheck.TOWER_ZOT);
        if (keyitems[KeyItem.EARTH_CRYSTAL] >= 1 || modeflags.opushbtojump) {
			ActivateCharacterLocation(CharacterCheck.TOWER_ZOT);
		}
		
		//Waterway
		ActivateCharacterLocation(CharacterCheck.WATERWAY);
		
		//Dwarf Castle
		DeactivateCharacterLocation(CharacterCheck.DWARF);
		if (hasunderworldaccess) {
			ActivateCharacterLocation(CharacterCheck.DWARF);
		}
		
		if (characterlocations[CharacterCheck.DWARF] === 2 || keyitemlocations[KeyItemCheck.DWARF] === 2) {
			rydia = true;
		} else {
			rydia = false;
		}

		//Lunar Sub.
		DeactivateCharacterLocation(CharacterCheck.MOON);
        if (keyitems[KeyItem.DARKNESS_CRYSTAL] >= 1) {
			ActivateCharacterLocation(CharacterCheck.MOON);
		}	

	
		// ****Towns/Shops****

		//Agart
		ActivateTownLocation(Town.AGART);
		
		//Town of Baron
		ActivateTownLocation(Town.BARON);

		//Eblan Cave
		DeactivateTownLocation(Town.EBLAN_CAVE);
        if (keyitems[KeyItem.HOOK] >= 1 || modeflags.opushbtojump) {
			ActivateTownLocation(Town.EBLAN_CAVE);
		}
		
		//Fabul
		ActivateTownLocation(Town.FABUL);
		
		//Kaipo
		ActivateTownLocation(Town.KAIPO);
		
		//Mysidia
		ActivateTownLocation(Town.MYSIDIA);
		
		//Silvera
		ActivateTownLocation(Town.SILVERA);
		
		//Toroia [Item]
		ActivateTownLocation(Town.TOROIA_ITEM);
		
		//Toroia [Pub]
		ActivateTownLocation(Town.TOROIA_PUB);
		
		//Dwarf Castle
		DeactivateTownLocation(Town.DWARF);
		if (hasunderworldaccess) {
			ActivateTownLocation(Town.DWARF);
		}
		
		//Feymarch
		DeactivateTownLocation(Town.FEY);
		if (hasunderworldaccess) {
			ActivateTownLocation(Town.FEY);
		}
		
		//Tomra
		DeactivateTownLocation(Town.TOMRA);
		if (hasunderworldaccess) {
			ActivateTownLocation(Town.TOMRA);
		}
		
		//Hummingway
		DeactivateTownLocation(Town.MOON);
        if (keyitems[KeyItem.DARKNESS_CRYSTAL] >= 1) {
			ActivateTownLocation(Town.MOON);
		}
		
		
		// ****Trapped Chests****
		
		//Castle Eblan
		ActivateTrappedLocation(Trap.CASTLE_EBLAN);

		//Eblan Cave
		DeactivateTrappedLocation(Trap.EBLAN_CAVE);
        if (keyitems[KeyItem.HOOK] >= 1 || modeflags.opushbtojump) {
			ActivateTrappedLocation(Trap.EBLAN_CAVE);
		}

		//Giant of Babil
		DeactivateTrappedLocation(Trap.GIANT_BABIL);
        if (keyitems[KeyItem.DARKNESS_CRYSTAL] >= 1) {
			ActivateTrappedLocation(Trap.GIANT_BABIL);
		}

		//Tower of Zot
		ActivateTrappedLocation(Trap.TOWER_ZOT);
		
		//Upper Babil
		DeactivateTrappedLocation(Trap.UPPER_BABIL);
        if (keyitems[KeyItem.HOOK] >= 1 || modeflags.opushbtojump) {
			ActivateTrappedLocation(Trap.UPPER_BABIL);
		}

		//Feymarch
		DeactivateTrappedLocation(Trap.FEY);
		if (hasunderworldaccess) {
			ActivateTrappedLocation(Trap.FEY);
		}

		//Lower Babil
		DeactivateTrappedLocation(Trap.LOWER_BABIL);
		if (hasunderworldaccess) {
			ActivateTrappedLocation(Trap.LOWER_BABIL);
		}

		//Slyph Cave
		DeactivateTrappedLocation(Trap.SYLPH_CAVE);
		if (hasunderworldaccess) {
			ActivateTrappedLocation(Trap.SYLPH_CAVE);
		}

		//Lunar Path
		DeactivateTrappedLocation(Trap.MOON_PATH);
        if (keyitems[KeyItem.DARKNESS_CRYSTAL] >= 1) {
			ActivateTrappedLocation(Trap.MOON_PATH);
		}

		//Lunar Sub.
		DeactivateTrappedLocation(Trap.MOON_SUB);
        if (keyitems[KeyItem.DARKNESS_CRYSTAL] >= 1) {
			ActivateTrappedLocation(Trap.MOON_SUB);
		}
	}
		
	if (cecil) { //If Cecil and Ordeals
		document.getElementById('character0').style = 'background-image: url(\'images/character0_2_a.png\')';
		if (!modeflags.ccecil) {
			document.getElementById('character0').style.opacity = '0.2';
		}		
	} else { //All Others
		document.getElementById('character0').style = 'background-image: url(\'images/character0_a.png\')';
		if (!modeflags.ccecil) {
			document.getElementById('character0').style.opacity = '0.2';
		}		
	}
	if (rydia) { //If Rydia and Dwarf Castle clear
		document.getElementById('character2').style = 'background-image: url(\'images/character2_2_a.png\')';
		if (!modeflags.crydia) {
			document.getElementById('character2').style.opacity = '0.2';
		}		
	} else { //All Others
		document.getElementById('character2').style = 'background-image: url(\'images/character2_a.png\')';
		if (!modeflags.crydia) {
			document.getElementById('character2').style.opacity = '0.2';
		}		
	}
	
	//Party Members
	for (var i = 0; i < modeflags.climit; i++) {
		var l = '';
		var p = 'party' + i;
		if (partymembers[i] != -1) {
			if ((partymembers[i] === 0 && cecil) || (partymembers[i] === 2 && rydia)) { //If Cecil and Ordeals clear or if Rydia and Dwarf 
				l = 'character' + partymembers[i] + '_2_a';
			} else { //All Others
				l = 'character' + partymembers[i] + '_a';
			}
		}
		if (l != '') {
			document.getElementById(p).style = 'background-image: url(\'images/' + l + '.png\')';
		} else {
			document.getElementById(p).style = 'background-image: none';
		}
	}
	
	//Items
	var bHasUnderworld = keyitems[KeyItem.HOOK] > 0 || keyitems[KeyItem.MAGMA_KEY] > 0;
	var itemcount = 0;
	var inGoMode = true;
	var canBeInGoMode = false;
	for (var i = 0; i < 18; i++) {
		var l = 'item' + i.toString();
        if (keyitems[i] >= 1) {
			//Check to see if Pass is a key item
			//if (pkey === true && i === 17) {
				//itemcount++;
			//}
			canBeInGoMode = true;
			if (i != KeyItem.PASS) {
				itemcount++;
			}
        }

		var newStyle = '';
        if (keyitems[i] == 1) {
			newStyle = 'background-image: url(\'images/item' + i + '_a.png\')';
        } else if (keyitems[i] == 2) {
            newStyle = 'background-image: url(\'images/done.png\'), url(\'images/item' + i + '_a.png\')';
		} else {
			newStyle = 'background-image: url(\'images/item' + i + '.png\')';
		}

		if (keyitemsRequiredForGoMode[i] > 0)
		{
			if (keyitems[i] >= 1)
			{
				newStyle = 'background-color: rgba(100,255,100,.3); outline:1px solid green;' + newStyle;
			}
			else if( bHasUnderworld && (i == KeyItem.HOOK || i == KeyItem.MAGMA_KEY) && keyitemsRequiredForGoMode[i] == 2)
			{
				newStyle = newStyle;
			}
			else 
			{
				inGoMode = false;
				newStyle = 'background-color: rgba(255,100,100,.3); outline:1px solid red;' + newStyle;
			}
		}
	
		document.getElementById(l).style = newStyle;
	}

	if (inGoMode && canBeInGoMode)
	{
		document.getElementById('gomodeDiv').classList.add("inGoMode");
		console.log("GO MODE!!");
	}
	else{
		document.getElementById('gomodeDiv').classList.remove("inGoMode");
	}

	
	if (itemcount > maxitems) {
		itemcount = maxitems;
	}
	
	document.getElementById('itemtracker').innerHTML = itemcount + '/' + maxitems;
	if (itemcount > 9 && !modeflags.oexpnokeybonus) {
		document.getElementById('itemtracker').style.color = "#0F0";
	} else {
		document.getElementById('itemtracker').style.color = "#FFF";
	}
		
	//Key Item Locations
	if (viewactivekeyitems === true) {
		document.getElementById('keyitemlocationviewchecked').style.display = "block";
		document.getElementById('keyitemlocationviewunchecked').style.display = "none";
	} else {
		document.getElementById('keyitemlocationviewchecked').style.display = "none";
		document.getElementById('keyitemlocationviewunchecked').style.display = "block";
	}
		
	for (var i = 0; i < 29; i++) {
		var l = 'keyitemlocation' + i.toString();
		
		if (viewactivekeyitems === true) {
			if (keyitemlocations[i] === 0) {
				document.getElementById(l).style.display = "none";
			} else if (keyitemlocations[i] === 1) {
				document.getElementById(l).style.display = "block";
				//document.getElementById(l).style.color = "#FFF";
				document.getElementById(l).style.setProperty("text-decoration", "none");
			} else if (keyitemlocations[i] > 1) {
				document.getElementById(l).style.display = "none";
			}
		} else {
			if ((keyitemlocations[i] === 2 || keyitemlocations[i] === 4) && i != 28) {
				document.getElementById(l).style.display = "block";
				//document.getElementById(l).style.color = "#FFF";
				document.getElementById(l).style.setProperty("text-decoration", "none");
			} else {
				document.getElementById(l).style.display = "none";
			}
			
		}
	}
	
	//Character Locations
	if (viewactivecharacters === true) {
		document.getElementById('characterlocationviewchecked').style.display = "block";
		document.getElementById('characterlocationviewunchecked').style.display = "none";
	} else {
		document.getElementById('characterlocationviewchecked').style.display = "none";
		document.getElementById('characterlocationviewunchecked').style.display = "block";
	}

	for (var i = 0; i < 14; i++) {
		var l = 'characterlocation' + i.toString();
		
		if (viewactivecharacters === true) {
			if (characterlocations[i] === 0) {
				document.getElementById(l).style.display = "none";
			} else if (characterlocations[i] === 1) {
				document.getElementById(l).style.display = "block";
				//document.getElementById(l).style.color = "#FFF";
				document.getElementById(l).style.setProperty("text-decoration", "none");
			} else if (characterlocations[i] > 1) {
				document.getElementById(l).style.display = "none";
			}
		} else {
			if (characterlocations[i] === 2) {
				document.getElementById(l).style.display = "block";
				//document.getElementById(l).style.color = "#FFF";
				document.getElementById(l).style.setProperty("text-decoration", "none");
			} else {
				document.getElementById(l).style.display = "none";
			}			
		}
	}
	
	//Town/Shop Locations
	if (viewactivetowns === true) {
		document.getElementById('townlocationviewchecked').style.display = "block";
		document.getElementById('townlocationviewunchecked').style.display = "none";
	} else {
		document.getElementById('townlocationviewchecked').style.display = "none";
		document.getElementById('townlocationviewunchecked').style.display = "block";
	}

	for (var i = 0; i < 13; i++) {
		var l = 'townlocation' + i.toString();
		
		if (viewactivetowns === true) {
			if (townlocations[i] === 0) {
				document.getElementById(l).style.display = "none";
			} else if (townlocations[i] === 1) {
				if (items[i] === '10000000000000000000000000000000000000') {
					document.getElementById(l).style.display = "none";
				} else {
					document.getElementById(l).style.display = "block";
					if (items[i] != '00000000000000000000000000000000000000' || itemsnotes[i] != '') {
						document.getElementById(l).style.color = "#0F0";
					} else {
						document.getElementById(l).style.color = "#FFF";
					}
					document.getElementById(l).style.setProperty("text-decoration", "none");
				}
			} else if (townlocations[i] > 1) {
				document.getElementById(l).style.display = "none";
			}
		} else {
			if (items[i] === '10000000000000000000000000000000000000') {
				document.getElementById(l).style.display = "block";
				document.getElementById(l).style.color = "#FFF";
				document.getElementById(l).style.setProperty("text-decoration", "none");
			} else {
				document.getElementById(l).style.display = "none";
			}
		}
	}
	
	//Trapped Chest Locations
	if (viewactivetrapped === true) {
		document.getElementById('trappedlocationviewchecked').style.display = "block";
		document.getElementById('trappedlocationviewunchecked').style.display = "none";
	} else {
		document.getElementById('trappedlocationviewchecked').style.display = "none";
		document.getElementById('trappedlocationviewunchecked').style.display = "block";
	}

	for (var i = 0; i < 10; i++) {
		var l = 'trappedlocation' + i.toString();
		
		if (viewactivetrapped === true) {
			document.getElementById(l).innerHTML = trappedchestnames[i] + ' [' + trappedchestcounts[i] + ']';
			if (trappedchestlocations[i] === 0) {
				document.getElementById(l).style.display = "none";
			} else if (trappedchestlocations[i] === 1) {
				document.getElementById(l).style.display = "block";
				//document.getElementById(l).style.color = "#FFF";
				document.getElementById(l).style.setProperty("text-decoration", "none");
			} else if (trappedchestlocations[i] > 1) {
				document.getElementById(l).style.display = "none";
			}
		} else {
			document.getElementById(l).innerHTML = trappedchestnames[i];
			if (trappedchestlocations[i] === 2) {
				document.getElementById(l).style.display = "block";
				//document.getElementById(l).style.color = "#FFF";
				document.getElementById(l).style.setProperty("text-decoration", "none");
			} else {
				document.getElementById(l).style.display = "none";
			}
		}
	}

	//Boss Tracker
	if (disablebosstracker === '0') {
		for (var i = 0; i < 35; i++) {
			var l = 'bossmodal' + i.toString();
			
			if (bosses[i] === true) {
				document.getElementById(l).style.color = "#666";
				document.getElementById(l).style.setProperty("text-decoration", "line-through");
			} else {
				document.getElementById(l).style.color = "#FFF";
				document.getElementById(l).style.setProperty("text-decoration", "none");
			}
		}	
	}
}

function convertHMS(value) {
    const sec = parseInt(value, 10) / 1000; // convert value to number if it's string
    let hours = Math.floor(sec / 3600); // get hours
    let minutes = Math.floor((sec - (hours * 3600)) / 60); // get minutes
    let seconds = Math.floor(sec - (hours * 3600) - (minutes * 60)); //  get seconds
    let ms = Math.floor(value % 1000 / 10);
    // add 0 if value < 10; Example: 2 => 02
    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }
    if (ms < 10) { ms = "0" + ms; }
    return hours + ':' + minutes + ':' + seconds + ':' + '<span style="font-size:2.5rem">' + ms + '</span>'; // Return is HH : MM : SS
}

var timerObject;
var timerSecondsElapsed = 0;

function timerUpdate() {
    var delta = Date.now() - timerStartTime;    
    document.getElementById('timerDiv').innerHTML = convertHMS(timerSecondsElapsed + delta);
}

function StartTimer() {
    timerStartTime = Date.now();

    document.getElementById('startButton').style.display = "none";
    document.getElementById('pauseButton').style.display = "block";
    document.getElementById('resetButton').style.display = "block";

    timerObject = setInterval(timerUpdate, 10);
    timerStarted = true;
    document.getElementById('timerDiv').classList.add('timerRunning')
    document.getElementById('timerDiv').classList.remove('timerPaused')
}

function PauseTimer() {
    clearInterval(timerObject)
	var delta = Date.now() - timerStartTime;
    timerStartTime = Date.now();

    timerSecondsElapsed += delta;
    document.getElementById('timerDiv').classList.add('timerPaused')
    document.getElementById('timerDiv').classList.remove('timerRunning')

    document.getElementById('startButton').style.display = "block";
    document.getElementById('pauseButton').style.display = "none";
    document.getElementById('resetButton').style.display = "block";
}

function ResetTimer() {
    document.getElementById('startButton').style.display = "block";
    document.getElementById('pauseButton').style.display = "none";
    document.getElementById('resetButton').style.display = "none";

    timerStarted = false;
    timerSecondsElapsed = 0;
    clearInterval(timerObject)
    document.getElementById('timerDiv').classList.remove('timerPaused')
    document.getElementById('timerDiv').classList.remove('timerRunning')
    document.getElementById('timerDiv').innerHTML = convertHMS(0);
}

function CopyTimerToClipboard() {
    var text = document.getElementById('timerDiv').textContent;

    // navigator clipboard api needs a secure context (https)
    if (navigator.clipboard && window.isSecureContext) {
        // navigator clipboard api method'
        return navigator.clipboard.writeText(text.substring(0, text.length - 3));
    } else {
        // text area method
        let textArea = document.createElement("textarea");
        textArea.value = text.substring(0, text.length - 3);
        // make the textarea out of viewport
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        return new Promise((res, rej) => {
            // here the magic happens
            document.execCommand('copy') ? res() : rej();
            textArea.remove();
        });
    }
}

function SwapKeyItemLocation(locationId) {
    var locationElementID = 'keyitemlocation' + locationId.toString();
	if (keyitemlocations[locationId] === 1) {
		keyitemlocations[locationId] = 2;

        if (timerStarted) {
            var timestampElement = document.createElement('div');
            timestampElement.id = "timestamp_id_" + locationId;
            timestampElement.innerHTML = `[${document.getElementById('timerDiv').textContent}]`;
            timestampElement.style = "color:white;margin-bottom:4px;";
            document.getElementById(locationElementID).appendChild(timestampElement);
        }

		if (locationId === KeyItemCheck.HOOK_ROUTE) {
			hookclear = true;
		}
		if (locationId === KeyItemCheck.DWARF && modeflags.gwarp) {
			keyitemlocations[KeyItemCheck.WARP_GLITCH] = 1;
		}
	} else if (keyitemlocations[locationId] === 2 || keyitemlocations[locationId] === 4)  {
		keyitemlocations[locationId] = 1;
        var timestampElement = document.getElementById("timestamp_id_" + locationId);
        if (timestampElement) {
            document.getElementById(locationElementID).removeChild(timestampElement);
        }
		if (locationId === KeyItemCheck.HOOK_ROUTE) {
			hookclear = false;
		}
	}

	ApplyChecks();
}

function SwapCharacterLocation(locationId) {
	if (characterlocations[locationId] === 1) {
		characterlocations[locationId] = 2;
	} else if (characterlocations[locationId] === 2) {
		characterlocations[locationId] = 1;
	}	
	ApplyChecks();
}

function SwapTrappedLocation(locationId) {
	if (trappedchestlocations[locationId] === 1) {
		trappedchestcounts[locationId]--;
		if (trappedchestcounts[locationId] === 0) {
			trappedchestlocations[locationId] = 2;
		}
	} else if (trappedchestlocations[locationId] === 2) {
		trappedchestlocations[locationId] = 1;
		trappedchestcounts[locationId] = trappedchestmaxcounts[locationId];
	}
	ApplyChecks();
}

function ActivateKeyItemLocation(locationId) {
	if (keyitemlocations[locationId] === 0) {
		keyitemlocations[locationId] = 1;
	}
}

function DeactivateKeyItemLocation(locationId) {
	if (keyitemlocations[locationId] === 1) {
		keyitemlocations[locationId] = 0;
	}
}

function ActivateCharacterLocation(locationId) {
	if (characterlocations[locationId] === 0) {
		characterlocations[locationId] = 1;
	}
}

function DeactivateCharacterLocation(locationId) {
	if (characterlocations[locationId] === 1) {
		characterlocations[locationId] = 0;
	}
}

function ActivateTownLocation(locationId) {
	if (townlocations[locationId] === 0) {
		townlocations[locationId] = 1;
	}
}

function DeactivateTownLocation(locationId) {
	if (townlocations[locationId] === 1) {
		townlocations[locationId] = 0;
	}
}

function ActivateTrappedLocation(locationId) {
	if (trappedchestlocations[locationId] === 0) {
		trappedchestlocations[locationId] = 1;
	}
}

function DeactivateTrappedLocation(locationId) {
	if (trappedchestlocations[locationId] === 1) {
		trappedchestlocations[locationId] = 0;
	}
}

function ViewCheckedKeyItems() {
	viewactivekeyitems = false;
	ApplyChecks();
}

function ViewUncheckedKeyItems() {
	viewactivekeyitems = true;
	ApplyChecks();
}

function ViewCheckedCharacters() {
	viewactivecharacters = false;
	ApplyChecks();
}

function ViewUncheckedCharacters() {
	viewactivecharacters = true;
	ApplyChecks();
}

function ViewCheckedTowns() {
	viewactivetowns = false;
	ApplyChecks();
}

function ViewUncheckedTowns() {
	viewactivetowns = true;
	ApplyChecks();
}

function ViewCheckedTrapped() {
	viewactivetrapped = false;
	ApplyChecks();
}

function ViewUncheckedTrapped() {
	viewactivetrapped = true;
	ApplyChecks();
}

function SwapBoss(bossId) {
	bosses[bossId] = !bosses[bossId];
	if (bossId === 0) {
		mist = !mist;
	}
	ApplyChecks();
}

function SwapBossImage(element) {
    element.classList.toggle("clicked");
    ApplyChecks();
}

function IgnoreMenuClose() {
	menutoggle = true;
}

function SwapItem(keyItemId) {
    keyitems[keyItemId] = (keyitems[keyItemId] + 1) % 3;
	ApplyChecks();
}				

function SwapCharacter(characterId) {
	if (disablecharactertracker === '0') {
		if (characterId === 99) {
			ignoreswap = true;
		} else {
			if (ignoreswap === true) {
				ignoreswap = false;
			} else {
				characters[characterId] = !characters[characterId];
				partymembers[partyswap] = characterId;
				//document.getElementById("partydiv").style.display = "block";
				document.getElementById("characterdiv").style.display = "none";
				ApplyChecks();
			}
		}
	}
}

function SwapParty(partySlot) {
	if (disablecharactertracker === '0') {
		if (ignoreswap === true) {
			ignoreswap = false;
		} else {
			//document.getElementById("partydiv").style.display = "none";
			document.getElementById("characterdiv").style.display = "block";
			partyswap = partySlot;
		}
	}
}

function PartyClear(partySlot) {
	partymembers[partySlot] = -1;
	ignoreswap = true;
	ApplyChecks();
}

function LoadItems(shopId) {
	CheckItems(shopId);
	$('#itemModal').show();
}

function CheckItems(shopId) {
	currentShop = shopId;

	// TODO find a better place to put this!
	const gatedShops = [Town.EBLAN_CAVE, Town.DWARF, Town.FEY, Town.TOMRA, Town.MOON];
	var isGated = gatedShops.includes(shopId);
	
	for (var itemId = 0; itemId < 38; itemId++) {
		// Gray out item spans which represent items that don't fit with the shop tier.
		// Keep them clickable in case of updates to tiering or data entry errors.
		var itemSpan = document.getElementById('itemspan' + itemId);

        if (items[shopId].charAt(itemId) == '1') {
			itemSpan.style.color = "#0F0";
			itemSpan.style.cursor = "pointer";
			itemSpan.style.cursor = "pointer";
        } else if (CanItemAppearInShop(itemId, modeflags, isGated)) {
			itemSpan.style.color = "#FFF";
			itemSpan.style.cursor = "pointer";
			itemSpan.style.cursor = "pointer";
        } else {
			itemSpan.style.color = "#888";
			itemSpan.style.cursor = "not-allowed";
			itemSpan.style.cursor = "not-allowed";
		}
	}
	
	document.getElementById("townnotes").value = itemsnotes[shopId];
}

function CheckItemSpan(itemId) {
	if (itemId == 0 && items[currentShop].charAt(0) == '0') {
		// "No items, clear it and close" functionality.
		items[currentShop] = '10000000000000000000000000000000000000';
		itemsnotes[currentShop] = '';
		townlocations[currentShop] = 2;
		CloseItems();
	} else {
		if (items[currentShop].charAt(itemId) == '0') {
			items[currentShop] = ReplaceItem(items[currentShop], itemId, '1');
		} else {
			items[currentShop] = ReplaceItem(items[currentShop], itemId, '0');
		}
		CheckItems(currentShop);
	}
}

function ReplaceItem(itemString, itemId, newValue) {
	return itemString.slice(0, itemId) + newValue + itemString.slice(itemId+1);
}

function CloseItems() {
	if (menutoggle === false) {
		itemsnotes[currentShop] = document.getElementById("townnotes").value;
		if (items[currentShop] === 1) {
			townlocations[currentShop] = 2;
		} else {
			townlocations[currentShop] = 1;
		}
		$('#itemModal').hide();
		ApplyChecks();
	} else {
		menutoggle = false;
	}
}

function RefreshRequiredKeyItems()
{
	for ( var i=0 ; i< keyitemsRequiredForGoMode.length ; i++)
	{
		keyitemsRequiredForGoMode[i] = false;
	}

	SetRequiredKeyItems(58, [KeyItem.BARON_KEY]) //"Liberate Baron Castle"
	SetRequiredKeyItems(59, [KeyItem.TWINHARP]) //"Complete Cave Magnes"
	SetRequiredKeyItems(60, [KeyItem.EARTH_CRYSTAL]) //"Complete the Tower of Zot"
	SetRequiredKeyItems(61, [KeyItem.HOOK, KeyItem.MAGMA_KEY]) //"Defeat the bosses of Dwarf Castle"
	SetRequiredKeyItems(62, [KeyItem.HOOK, KeyItem.MAGMA_KEY]) //"Defeat the boss of Lower Bab-il"
	SetRequiredKeyItems(63, [KeyItem.HOOK]) //"Launch the Falcon"
	SetRequiredKeyItems(64, [KeyItem.LUCA_KEY, KeyItem.HOOK, KeyItem.MAGMA_KEY]) //"Complete the Sealed Cave"
	SetRequiredKeyItems(65, [KeyItem.HOOK, KeyItem.MAGMA_KEY]) //"Defeat the queen at the Town of Monsters"
	SetRequiredKeyItems(66, [KeyItem.HOOK, KeyItem.MAGMA_KEY]) //"Defeat the king at the Town of Monsters"
	SetRequiredKeyItems(67, [KeyItem.BARON_KEY]) //"Defeat the Baron Castle basement throne"
	SetRequiredKeyItems(68, [KeyItem.DARKNESS_CRYSTAL]) //"Complete the Giant of Bab-il"
	SetRequiredKeyItems(69, [KeyItem.DARKNESS_CRYSTAL]) //"Complete Cave Bahamut"
	SetRequiredKeyItems(70, [KeyItem.DARKNESS_CRYSTAL]) //"Conquer the vanilla Murasame altar"
	SetRequiredKeyItems(71, [KeyItem.DARKNESS_CRYSTAL]) //"Conquer the vanilla Crystal Sword altar"
	SetRequiredKeyItems(72, [KeyItem.DARKNESS_CRYSTAL]) //"Conquer the vanilla White Spear altar"
	SetRequiredKeyItems(73, [KeyItem.DARKNESS_CRYSTAL]) //"Conquer the vanilla Ribbon room"
	SetRequiredKeyItems(74, [KeyItem.DARKNESS_CRYSTAL]) //"Conquer the vanilla Masamune altar"
	SetRequiredKeyItems(75, [KeyItem.PACKAGE]) //"Burn village Mist with the Package"
	SetRequiredKeyItems(76, [KeyItem.SANDRUBY]) //"Cure the fever with the SandRuby"
	SetRequiredKeyItems(77, [KeyItem.BARON_KEY]) //"Unlock the sewer with the Baron Key"
	SetRequiredKeyItems(78, [KeyItem.TWINHARP]) //"Break the Dark Elf's spell with the TwinHarp"
	SetRequiredKeyItems(79, [KeyItem.EARTH_CRYSTAL]) //"Open the Toroia treasury with the Earth Crystal"
	SetRequiredKeyItems(80, [KeyItem.MAGMA_KEY]) //"Drop the Magma Key into the Agart well"
	SetRequiredKeyItems(81, [KeyItem.TOWER_KEY, KeyItem.HOOK, KeyItem.MAGMA_KEY]) //"Destroy the Super Cannon"
	SetRequiredKeyItems(82, [KeyItem.LUCA_KEY, KeyItem.HOOK, KeyItem.MAGMA_KEY]) //"Unlock the Sealed Cave"
	SetRequiredKeyItems(83, [KeyItem.DARKNESS_CRYSTAL]) //"Raise the Big Whale"
	SetRequiredKeyItems(84, [KeyItem.RAT_TAIL, KeyItem.HOOK]) //"Trade away the Rat Tail"
	SetRequiredKeyItems(85, [KeyItem.LEGEND, KeyItem.ADAMANT, KeyItem.HOOK, KeyItem.MAGMA_KEY]) //"Have Kokkol forge Legend Sword with Adamant"
	SetRequiredKeyItems(86, [KeyItem.PAN, KeyItem.HOOK, KeyItem.MAGMA_KEY]) //"Wake Yang with the Pan"
	SetRequiredKeyItems(87, [KeyItem.PAN, KeyItem.HOOK, KeyItem.MAGMA_KEY]) //"Return the Pan to Yang's wife"
	SetRequiredKeyItems(88, [KeyItem.PINK_TAIL, KeyItem.HOOK]) //"Trade away the Pink Tail"
	SetRequiredKeyItems(89, [KeyItem.PASS]) //"Unlock the Pass door in Toroia"

	ApplyChecks();
}

function SetRequiredKeyItems(desiredObjectiveIndex, keyItems)
{
	var bWantsUnderground = false;
	var bWantHook = false;
	var bWantsMagma = false;
	for(var j=0 ; j < keyItems.length ; j++)
	{
		if (keyItems[j] == KeyItem.MAGMA_KEY)
		{
			bWantsMagma = true;
		}
		if (keyItems[j] == KeyItem.HOOK)
		{
			bWantHook = true;
		}
	}
	bWantsUnderground = bWantHook && bWantsMagma;
	for (var objectiveIndex = 0; objectiveIndex < 98; objectiveIndex++) 
	{
		if (objectives[objectiveIndex] == 0 && desiredObjectiveIndex == objectiveIndex)
		{
			for(var j=0 ; j < keyItems.length ; j++)
			{
				var itemValue = 1;
				if (bWantsUnderground && (keyItems[j] == KeyItem.MAGMA_KEY || keyItems[j] == KeyItem.HOOK))
				{
					// Only set value of 2 (which means it's paired with another, optional key item) if something else hasn't already set it
					if (keyitemsRequiredForGoMode[keyItems[j]] != 1)
					{
						itemValue = 2;
					}
				}

				keyitemsRequiredForGoMode[keyItems[j]] = itemValue;
			}
		}
	}
}

function SetObjectives() {
	if (disableobjectivetracker === '0') {
		for (var i = 0; i < 98; i++) {
			if (objectives[i] === 2) {
				document.getElementById('objective' + i).style.display = 'none';
				document.getElementById('objectiveCheck' + i).style.display = 'none';
			} else {
                document.getElementById('objective' + i).style = 'display:flex;';
				document.getElementById('objectiveCheck' + i).style.display = '';
			}
		}
		
		if (objectives[98] === 2) {
			document.getElementById('objectivesVictory').innerHTML = 'REQUIRED FOR CRYSTAL';
		}
		if (objectives[99] === 2) {
			document.getElementById('objectivesVictory').innerHTML = 'REQUIRED TO WIN';
		}
		
		if (modeflags.odarkmatter === false) {
			document.getElementById('objectivedm').style.display = 'none';
		} else {
			document.getElementById('objectivedm').style.display = '';
		}
	}
}

function checkOffObjective(i) {
	objectives[i] = (objectives[i] === 0 ? 1 : 0);
	if (objectives[i] === 1) {
		document.getElementById('objectiveCheck' + i).src = 'images/objectivechecked.png';
        if (timerStarted) {
            document.getElementById('objectivetimeStamp' + i).innerHTML = document.getElementById('timerDiv').textContent;;
            document.getElementById('objectivetimeStamp' + i).style = 'margin-left:4px;color:rgba(100, 255, 100, 1.0);';
        }
	} else {
		document.getElementById('objectiveCheck' + i).src = 'images/objectiveunchecked.png';
        document.getElementById('objectivetimeStamp' + i).innerHTML = '';
	}
}

function ChangeObjective(i) {
	objectivechange = i;
	$('#objectiveModal').show();
	document.getElementById('objectivescharacterdiv').style.display = 'none';
	document.getElementById('objectivesbossdiv').style.display = 'none';
	document.getElementById('objectivesquestsdiv').style.display = 'none';	
}

function CloseObjectives() {
	if (menutoggle === false) {
		$('#objectiveModal').hide();
	} else {
		menutoggle = false;
	}
}

function LoadObjectiveDetail(i) {
	if (i === 0 && modeflags.oquests === true) {
		document.getElementById('objectivesquestsdiv').style.display = '';
		document.getElementById('objectivesbossdiv').style.display = 'none';
		document.getElementById('objectivescharacterdiv').style.display = 'none';
	} else if (i === 1 && modeflags.oboss === true) {
		document.getElementById('objectivesbossdiv').style.display = '';
		document.getElementById('objectivesquestsdiv').style.display = 'none';
		document.getElementById('objectivescharacterdiv').style.display = 'none';
	} else if (i === 2 && modeflags.ochar === true) {
		document.getElementById('objectivescharacterdiv').style.display = '';
		document.getElementById('objectivesbossdiv').style.display = 'none';
		document.getElementById('objectivesquestsdiv').style.display = 'none';
	}
}


function SetObjectiveEnabled(i, val)
{
	var knownObjective = document.getElementById('objective' + i);
	if (knownObjective)
	{
		console.log(`setting objective #${i} to ${knownObjective.innerHTML} ${val}`);
	}
	objectives[i] = val;
	RefreshRequiredKeyItems();
}

function SetRandomObjective(i) {
	var previousObjective = document.getElementById('randomobjective' + objectivechange).innerHTML;
	for (var objectiveIndex=0 ; objectiveIndex < objectivenames.length ; objectiveIndex++)
	{
		if (previousObjective == objectivenames[objectiveIndex])
		{
			console.log("Previous objective was "+previousObjective);
			objectives[objectiveIndex + 4]= 2;
		}
	}
	var objectiveToChange = document.getElementById('randomobjective' + objectivechange).innerHTML = objectivenames[i];

	$('#objectiveModal').hide();
	RefreshRequiredKeyItems();
	SetObjectiveEnabled(i+4, 0);
}

function ViewMystery() {
	$('#mysteryModal').show();
	
	document.getElementById('mystery_owin').value = modeflags.owin;
	document.getElementById('mystery_oforge').checked = modeflags.oforge;
	document.getElementById('mystery_ogiant').checked = modeflags.ogiant;
	document.getElementById('mystery_ofiends').checked = modeflags.ofiends;
	document.getElementById('mystery_odarkmatter').checked = modeflags.odarkmatter;
	document.getElementById('mystery_oquests').value = modeflags.orandomcount;
	document.getElementById('mystery_ksummon').checked = modeflags.ksummon;
	document.getElementById('mystery_kmoon').checked = modeflags.kmoon;
	document.getElementById('mystery_ktrap').checked = modeflags.ktrap;
	document.getElementById('mystery_chero').checked = modeflags.chero;
	document.getElementById('mystery_climit').value = modeflags.climit;
	document.getElementById('mystery_nchars').checked = modeflags.nchars;
	document.getElementById('mystery_nkey').checked = modeflags.nkey;
	document.getElementById('mystery_gwarp').checked = modeflags.gwarp;
	document.getElementById('mystery_oexpnokeybonus').checked = modeflags.oexpnokeybonus;
	document.getElementById('mystery_opushbtojump').checked = modeflags.opushbtojump;
}


function CloseMystery() {
	if (menutoggle === false) {
		$('#mysteryModal').hide();

		modeflags.owin = document.getElementById('mystery_owin').value;
	
		if (modeflags.owin === 'game') {
			SetObjectiveEnabled(98,0);
			SetObjectiveEnabled(99,2);
		} else {
			SetObjectiveEnabled(98,2);
			SetObjectiveEnabled(99,0);
		}	

		modeflags.oforge = document.getElementById('mystery_oforge').checked;
		
		if (modeflags.oforge) {
			SetObjectiveEnabled(0,0);
		} else {
			SetObjectiveEnabled(0,2);
		}
		
		modeflags.ogiant = document.getElementById('mystery_ogiant').checked;

		if (modeflags.ogiant) {
			SetObjectiveEnabled(1,0);
		} else {
			SetObjectiveEnabled(1,2);
		}
		
		modeflags.ofiends = document.getElementById('mystery_ofiends').checked;

		if (modeflags.ofiends) {
			SetObjectiveEnabled(23,0);
			SetObjectiveEnabled(24,0);
			SetObjectiveEnabled(29,0);
			SetObjectiveEnabled(32,0);
			SetObjectiveEnabled(38,0);
			SetObjectiveEnabled(44,0);
		} else {
			SetObjectiveEnabled(23,2);
			SetObjectiveEnabled(24,2);
			SetObjectiveEnabled(29,2);
			SetObjectiveEnabled(32,2);
			SetObjectiveEnabled(38,2);
			SetObjectiveEnabled(44,2);
		}
		
		modeflags.odarkmatter = document.getElementById('mystery_odarkmatter').checked;
		
		if (modeflags.odarkmatter) {
			SetObjectiveEnabled(3,0);
		} else {
			SetObjectiveEnabled(3,2);
		}
		
		modeflags.orandomcount = document.getElementById('mystery_oquests').value;
		
		for (var j = 0; j < 8; j++) {
			if (modeflags.orandomcount > j) {
				objectives[90 + j] = 0;
			} else {
				objectives[90 + j] = 2;
			}
		}
		
		modeflags.ksummon = document.getElementById('mystery_ksummon').checked;
		
		if (modeflags.ksummon) {
			keyitemlocations[KeyItemCheck.BARON_ODIN] = 0; //Odin
			keyitemlocations[KeyItemCheck.FEY_ASURA] = 0; //Asura
			keyitemlocations[KeyItemCheck.FEY_LEVIATHAN] = 0; //Leva
			keyitemlocations[KeyItemCheck.SYLPH_CAVE] = 0; //Slyph
			keyitemlocations[KeyItemCheck.BAHAMUT] = 0; //Bahamut
		} else {
			keyitemlocations[KeyItemCheck.BARON_ODIN] = 3; //Odin
			keyitemlocations[KeyItemCheck.FEY_ASURA] = 3; //Asura
			keyitemlocations[KeyItemCheck.FEY_LEVIATHAN] = 3; //Leva
			keyitemlocations[KeyItemCheck.SYLPH_CAVE] = 3; //Slyph
			keyitemlocations[KeyItemCheck.BAHAMUT] = 3; //Bahamut
		}	
		
		modeflags.kmoon = document.getElementById('mystery_kmoon').checked;
		
		if (modeflags.kmoon) {
			keyitemlocations[KeyItemCheck.MOON_CRYSTAL] = 0; //Lunar Crystal
			keyitemlocations[KeyItemCheck.MOON_MASAMUNE] = 0; //Lunar Masa
			keyitemlocations[KeyItemCheck.MOON_MURASAME] = 0; //Lunar Mura
			keyitemlocations[KeyItemCheck.MOON_RIBBON] = 0; //Lunar Ribbon
			keyitemlocations[KeyItemCheck.MOON_WHITE] = 0; //Lunar White
		} else {
			keyitemlocations[KeyItemCheck.MOON_CRYSTAL] = 3; //Lunar Crystal
			keyitemlocations[KeyItemCheck.MOON_MASAMUNE] = 3; //Lunar Masa
			keyitemlocations[KeyItemCheck.MOON_MURASAME] = 3; //Lunar Mura
			keyitemlocations[KeyItemCheck.MOON_RIBBON] = 3; //Lunar Ribbon
			keyitemlocations[KeyItemCheck.MOON_WHITE] = 3; //Lunar White
		}
		
		modeflags.ktrap = document.getElementById('mystery_ktrap').checked;
		
		if (modeflags.ktrap) {
			document.getElementById('trappedchestsdiv').style.display = "";
			document.getElementById('keyitemsdiv').style.width = "120px";
			document.getElementById('charactersdiv').style.width = "120px";
			document.getElementById('townsdiv').style.width = "120px";
		} else {
			document.getElementById('trappedchestsdiv').style.display = "none";
			document.getElementById('keyitemsdiv').style.width = "160px";
			document.getElementById('charactersdiv').style.width = "160px";
			document.getElementById('townsdiv').style.width = "160px";
		}
		
		modeflags.chero = document.getElementById('mystery_chero').checked;
		modeflags.climit = document.getElementById('mystery_climit').value;
		modeflags.nchars = document.getElementById('mystery_nchars').checked;
				
		if (modeflags.nchars) {
			characterlocations[CharacterCheck.DAMCYAN] = 3;
			characterlocations[CharacterCheck.MT_ORDEALS] = 3;
			characterlocations[CharacterCheck.MYSIDIA] = 3;
			characterlocations[CharacterCheck.WATERWAY] = 3;
		} else {
			characterlocations[CharacterCheck.DAMCYAN] = 0;
			characterlocations[CharacterCheck.MT_ORDEALS] = 0;
			characterlocations[CharacterCheck.MYSIDIA] = 0;
			characterlocations[CharacterCheck.WATERWAY] = 0;			
		}
		
		modeflags.nkey = document.getElementById('mystery_nkey').checked;
		
		if (modeflags.nkey) {
			keyitemlocations[KeyItemCheck.TOROIA] = 3;
			keyitemlocations[KeyItemCheck.MIST] = 0;
			if (disablebosstracker === '1') {
				document.getElementById('misttoggle').style.visibility = "";
			}
		} else {
			keyitemlocations[KeyItemCheck.TOROIA] = 0;
			keyitemlocations[KeyItemCheck.MIST] = 3;
			if (disablebosstracker === '1') {
				document.getElementById('misttoggle').style.visibility = "hidden";
			}
		}		
		
		modeflags.gwarp = document.getElementById('mystery_gwarp').checked;
		modeflags.oexpnokeybonus = document.getElementById('mystery_oexpnokeybonus').checked;
		modeflags.opushbtojump = document.getElementById('mystery_opushbtojump').checked;
		
		SetFlagOptions();
		SetObjectives();
		RefreshRequiredKeyItems();
		ApplyChecks();
	} else {
		menutoggle = false;
	}
}

function ExpandFlags(index) {
    $('#flagdetail' + index).show();
}

function OpenFlags() {
    $('#flagsModal').show();
}

function CloseFlags() {
    if (menutoggle === false) {
        $('#flagsModal').hide();
    } else {
        menutoggle = false;
    }
}

function CloseBoss() {
	if (menutoggle === false) {
		$('#bossModal').hide();
	} else {
		menutoggle = false;
	}
}

function ViewTown() {
	LoadKnownTownLocations();
	$('#townModal').show();
}

function CloseTown() {
	if (menutoggle === false) {
		$('#townModal').hide();
	} else {
		menutoggle = false;
	}
}

function LoadKnownTownLocations() {
	var summaryStrings = ['','','','','','','','','','','','',''];
	
    for (var shopId = 0; shopId < items.length; shopId++) {
		var foundItems = [];
        for (var itemId = 1; itemId < items[shopId].length; itemId++) {
            if (items[shopId].charAt(itemId) === '1') {
				foundItems.push(Item[itemId].NAME);
			}
		}

        if (itemsnotes[shopId].length > 0) {
			foundItems.push(itemsnotes[shopId]);
		}

        if (foundItems.length > 0) {
			summaryStrings[shopId] = foundItems.join(", ");
		}
	}
	
	document.getElementById('townlistlocation1').innerHTML = summaryStrings[0];
	document.getElementById('townlistlocation2').innerHTML = summaryStrings[1];
	document.getElementById('townlistlocation3').innerHTML = summaryStrings[2];
	document.getElementById('townlistlocation4').innerHTML = summaryStrings[3];
	document.getElementById('townlistlocation5').innerHTML = summaryStrings[4];
	document.getElementById('townlistlocation6').innerHTML = summaryStrings[5];
	document.getElementById('townlistlocation7').innerHTML = summaryStrings[6];
	document.getElementById('townlistlocation8').innerHTML = summaryStrings[7];
	document.getElementById('townlistlocation9').innerHTML = summaryStrings[8];
	document.getElementById('townlistlocation10').innerHTML = summaryStrings[9];
	document.getElementById('townlistlocation11').innerHTML = summaryStrings[10];
	document.getElementById('townlistlocation12').innerHTML = summaryStrings[11];
	document.getElementById('townlistlocation13').innerHTML = summaryStrings[12];
	
}

function ToggleMist() {
	if (disablebosstracker === '1') {
		mist = !mist;
		if (mist) {
			document.getElementById('misttoggle').style = 'background-image: url(\'images/mistdragon.png\')';
		} else {
			document.getElementById('misttoggle').style = 'background-image: url(\'images/mistdragon_2.png\')';
		}
		ApplyChecks();
	} else {
		$('#bossModal').show();
	}	
}

function WarpGlitch() {
	if (ignorewarp === false) {		
		keyitemlocations[KeyItemCheck.SEALED_CAVE] = 2;
		keyitemlocations[KeyItemCheck.WARP_GLITCH] = 2;
		ApplyChecks();
	}
	ignorewarp = false;
}

function ClearWarpGlitch() {
	keyitemlocations[KeyItemCheck.WARP_GLITCH] = 2;
	ignorewarp = true;
	ApplyChecks();
}

function DMTicker(delta) {
	dmcount += delta;
	if (dmcount < 0) { dmcount = 0 };
	if (dmcount > 30) { dmcount = 30 };
	document.getElementById('dmcountspan').innerHTML = dmcount;
}

function HighlightClear(partySlot) {
	document.getElementById('partyClear' + partySlot).style.backgroundColor = "rgb(255,255,255,1)";
}

function UnhighlightClear(partySlot) {
	document.getElementById('partyClear' + partySlot).style.backgroundColor = "rgb(255,255,255,.3)";
}

function showautotrackingstatus() {
	document.getElementById('autotrackingdiv').innerHTML = autotrackingmessage;
}

function resetautotrackingstatus() {
	document.getElementById('autotrackingdiv').innerHTML = "(?)";
}

function flagautotrackingerror(x) {
	if (x == true) {
		document.getElementById('autotrackingdiv').style.color = "#F00";
	} else {
		document.getElementById('autotrackingdiv').style.color = "#CCC";
	}	
}
