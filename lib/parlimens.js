export function getParlimensList() {
  let parlimens = [
    {
      "nama": "PADANG BESAR",
      "kod": "P.001",
    },
    {
      "nama": "KANGAR",
      "kod": "P.002",
    },
    {
      "nama": "ARAU",
      "kod": "P.003",
    },
    {
      "nama": "LANGKAWI",
      "kod": "P.004",
    },
    {
      "nama": "JERLUN",
      "kod": "P.005",
    },
    {
      "nama": "KUBANG PASU",
      "kod": "P.006",
    },
    {
      "nama": "PADANG TERAP",
      "kod": "P.007",
    },
    {
      "nama": "POKOK SENA",
      "kod": "P.008",
    },
    {
      "nama": "ALOR SETAR",
      "kod": "P.009",
    },
    {
      "nama": "KUALA KEDAH",
      "kod": "P.010",
    },
    {
      "nama": "PENDANG",
      "kod": "P.011",
    },
    {
      "nama": "JERAI",
      "kod": "P.012",
    },
    {
      "nama": "SIK",
      "kod": "P.013",
    },
    {
      "nama": "MERBOK",
      "kod": "P.014",
    },
    {
      "nama": "SUNGAI PETANI",
      "kod": "P.015",
    },
    {
      "nama": "BALING",
      "kod": "P.016",
    },
    {
      "nama": "PADANG SERAI",
      "kod": "P.017",
    },
    {
      "nama": "KULIM BANDAR BAHARU",
      "kod": "P.018",
    },
    {
      "nama": "TUMPAT",
      "kod": "P.019",
    },
    {
      "nama": "PENGKALAN CHEPA",
      "kod": "P.020",
    },
    {
      "nama": "KOTA BHARU",
      "kod": "P.021",
    },
    {
      "nama": "PASIR MAS",
      "kod": "P.022",
    },
    {
      "nama": "RANTAU PANJANG",
      "kod": "P.023",
    },
    {
      "nama": "KUBANG KERIAN",
      "kod": "P.024",
    },
    {
      "nama": "BACHOK",
      "kod": "P.025",
    },
    {
      "nama": "KETEREH",
      "kod": "P.026",
    },
    {
      "nama": "TANAH MERAH",
      "kod": "P.027",
    },
    {
      "nama": "PASIR PUTEH",
      "kod": "P.028",
    },
    {
      "nama": "MACHANG",
      "kod": "P.029",
    },
    {
      "nama": "JELI",
      "kod": "P.030",
    },
    {
      "nama": "KUALA KRAI",
      "kod": "P.031",
    },
    {
      "nama": "GUA MUSANG",
      "kod": "P.032",
    },
    {
      "nama": "BESUT",
      "kod": "P.033",
    },
    {
      "nama": "SETIU",
      "kod": "P.034",
    },
    {
      "nama": "KUALA NERUS",
      "kod": "P.035",
    },
    {
      "nama": "KUALA TERENGGANU",
      "kod": "P.036",
    },
    {
      "nama": "MARANG",
      "kod": "P.037",
    },
    {
      "nama": "HULU TERENGGANU",
      "kod": "P.038",
    },
    {
      "nama": "DUNGUN",
      "kod": "P.039",
    },
    {
      "nama": "KEMAMAN",
      "kod": "P.040",
    },
    {
      "nama": "KEPALA BATAS",
      "kod": "P.041",
    },
    {
      "nama": "TASEK GELUGOR",
      "kod": "P.042",
    },
    {
      "nama": "BAGAN",
      "kod": "P.043",
    },
    {
      "nama": "PERMATANG PAUH",
      "kod": "P.044",
    },
    {
      "nama": "BUKIT MERTAJAM",
      "kod": "P.045",
    },
    {
      "nama": "BATU KAWAN",
      "kod": "P.046",
    },
    {
      "nama": "NIBONG TEBAL",
      "kod": "P.047",
    },
    {
      "nama": "BUKIT BENDERA",
      "kod": "P.048",
    },
    {
      "nama": "TANJONG",
      "kod": "P.049",
    },
    {
      "nama": "JELUTONG",
      "kod": "P.050",
    },
    {
      "nama": "BUKIT GELUGOR",
      "kod": "P.051",
    },
    {
      "nama": "BAYAN BARU",
      "kod": "P.052",
    },
    {
      "nama": "BALIK PULAU",
      "kod": "P.053",
    },
    {
      "nama": "GERIK",
      "kod": "P.054",
    },
    {
      "nama": "LENGGONG",
      "kod": "P.055",
    },
    {
      "nama": "LARUT",
      "kod": "P.056",
    },
    {
      "nama": "PARIT BUNTAR",
      "kod": "P.057",
    },
    {
      "nama": "BAGAN SERAI",
      "kod": "P.058",
    },
    {
      "nama": "BUKIT GANTANG",
      "kod": "P.059",
    },
    {
      "nama": "TAIPING",
      "kod": "P.060",
    },
    {
      "nama": "PADANG RENGAS",
      "kod": "P.061",
    },
    {
      "nama": "SUNGAI SIPUT",
      "kod": "P.062",
    },
    {
      "nama": "TAMBUN",
      "kod": "P.063",
    },
    {
      "nama": "IPOH TIMOR",
      "kod": "P.064",
    },
    {
      "nama": "IPOH BARAT",
      "kod": "P.065",
    },
    {
      "nama": "BATU GAJAH/b>",
      "kod": "P.066",
    },
    {
      "nama": "KUALA KANGSAR",
      "kod": "P.067",
    },
    {
      "nama": "BERUAS",
      "kod": "P.068",
    },
    {
      "nama": "PARIT",
      "kod": "P.069",
    },
    {
      "nama": "KAMPAR",
      "kod": "P.070",
    },
    {
      "nama": "GOPENG",
      "kod": "P.071",
    },
    {
      "nama": "TAPAH",
      "kod": "P.072",
    },
    {
      "nama": "PASIR SALAK",
      "kod": "P.073",
    },
    {
      "nama": "LUMUT",
      "kod": "P.074",
    },
    {
      "nama": "BAGAN DATUK",
      "kod": "P.075",
    },
    {
      "nama": "TELUK INTAN",
      "kod": "P.076",
    },
    {
      "nama": "TANJONG MALIM",
      "kod": "P.077",
    },
    {
      "nama": "CAMERON HIGHLANDS",
      "kod": "P.078",
    },
    {
      "nama": "LIPIS",
      "kod": "P.079",
    },
    {
      "nama": "RAUB",
      "kod": "P.080",
    },
    {
      "nama": "JERANTUT",
      "kod": "P.081",
    },
    {
      "nama": "INDERA MAHKOTA",
      "kod": "P.082",
    },
    {
      "nama": "KUANTAN",
      "kod": "P.083",
    },
    {
      "nama": "PAYA BESAR",
      "kod": "P.084",
    },
    {
      "nama": "PEKAN",
      "kod": "P.085",
    },
    {
      "nama": "MARAN",
      "kod": "P.086",
    },
    {
      "nama": "KUALA KRAU",
      "kod": "P.087",
    },
    {
      "nama": "TEMERLOH",
      "kod": "P.088",
    },
    {
      "nama": "BENTONG",
      "kod": "P.089",
    },
    {
      "nama": "BERA",
      "kod": "P.090",
    },
    {
      "nama": "ROMPIN",
      "kod": "P.091",
    },
    {
      "nama": "SABAK BERNAM",
      "kod": "P.092",
    },
    {
      "nama": "SUNGAI BESAR",
      "kod": "P.093",
    },
    {
      "nama": "HULU SELANGOR",
      "kod": "P.094",
    },
    {
      "nama": "TANJONG KARANG",
      "kod": "P.095",
    },
    {
      "nama": "KUALA SELANGOR",
      "kod": "P.096",
    },
    {
      "nama": "SELAYANG",
      "kod": "P.097",
    },
    {
      "nama": "GOMBAK",
      "kod": "P.098",
    },
    {
      "nama": "AMPANG",
      "kod": "P.099",
    },
    {
      "nama": "PANDAN",
      "kod": "P.100",
    },
    {
      "nama": "HULU LANGAT",
      "kod": "P.101",
    },
    {
      "nama": "BANGI",
      "kod": "P.102",
    },
    {
      "nama": "PUCHONG",
      "kod": "P.103",
    },
    {
      "nama": "SUBANG",
      "kod": "P.104",
    },
    {
      "nama": "PETALING JAYA",
      "kod": "P.105",
    },
    {
      "nama": "DAMANSARA",
      "kod": "P.106",
    },
    {
      "nama": "SUNGAI BULOH",
      "kod": "P.107",
    },
    {
      "nama": "SHAH ALAM",
      "kod": "P.108",
    },
    {
      "nama": "KAPAR",
      "kod": "P.109",
    },
    {
      "nama": "KLANG",
      "kod": "P.110",
    },
    {
      "nama": "KOTA RAJA",
      "kod": "P.111",
    },
    {
      "nama": "KUALA LANGAT",
      "kod": "P.112",
    },
    {
      "nama": "SEPANG",
      "kod": "P.113",
    },
    {
      "nama": "KEPONG",
      "kod": "P.114",
    },
    {
      "nama": "BATU",
      "kod": "P.115",
    },
    {
      "nama": "WANGSA MAJU",
      "kod": "P.116",
    },
    {
      "nama": "SEGAMBUT",
      "kod": "P.117",
    },
    {
      "nama": "SETIAWANGSA",
      "kod": "P.118",
    },
    {
      "nama": "TITIWANGSA",
      "kod": "P.119",
    },
    {
      "nama": "BUKIT BINTANG",
      "kod": "P.120",
    },
    {
      "nama": "LEMBAH PANTAI",
      "kod": "P.121",
    },
    {
      "nama": "SEPUTEH",
      "kod": "P.122",
    },
    {
      "nama": "CHERAS",
      "kod": "P.123",
    },
    {
      "nama": "BANDAR TUN RAZAK",
      "kod": "P.124",
    },
    {
      "nama": "PUTRAJAYA",
      "kod": "P.125",
    },
    {
      "nama": "JELEBU",
      "kod": "P.126",
    },
    {
      "nama": "JEMPOL",
      "kod": "P.127",
    },
    {
      "nama": "SEREMBAN",
      "kod": "P.128",
    },
    {
      "nama": "KUALA PILAH",
      "kod": "P.129",
    },
    {
      "nama": "RASAH",
      "kod": "P.130",
    },
    {
      "nama": "REMBAU",
      "kod": "P.131",
    },
    {
      "nama": "PORT DICKSON",
      "kod": "P.132",
    },
    {
      "nama": "TAMPIN",
      "kod": "P.133",
    },
    {
      "nama": "MASJID TANAH1",
      "kod": "P.134",
    },
    {
      "nama": "ALOR GAJAH",
      "kod": "P.135",
    },
    {
      "nama": "TANGGA BATU",
      "kod": "P.136",
    },
    {
      "nama": "HANG TUAH JAYA",
      "kod": "P.137",
    },
    {
      "nama": "KOTA MELAKA",
      "kod": "P.138",
    },
    {
      "nama": "JASIN",
      "kod": "P.139",
    },
    {
      "nama": "SEGAMAT",
      "kod": "P.140",
    },
    {
      "nama": "SEKIJANG",
      "kod": "P.141",
    },
    {
      "nama": "LABIS",
      "kod": "P.142",
    },
    {
      "nama": "PAGOH",
      "kod": "P.143",
    },
    {
      "nama": "LEDANG",
      "kod": "P.144",
    },
    {
      "nama": "BAKRI",
      "kod": "P.145",
    },
    {
      "nama": "MUAR",
      "kod": "P.146",
    },
    {
      "nama": "PARIT SULONG",
      "kod": "P.147",
    },
    {
      "nama": "AYER HITAM",
      "kod": "P.148",
    },
    {
      "nama": "SRI GADING",
      "kod": "P.149",
    },
    {
      "nama": "BATU PAHAT",
      "kod": "P.150",
    },
    {
      "nama": "SIMPANG RENGGAM",
      "kod": "P.151",
    },
    {
      "nama": "KLUANG",
      "kod": "P.152",
    },
    {
      "nama": "SEMBRONG",
      "kod": "P.153",
    },
    {
      "nama": "MERSING",
      "kod": "P.154",
    },
    {
      "nama": "TENGGARA",
      "kod": "P.155",
    },
    {
      "nama": "KOTA TINGGI",
      "kod": "P.156",
    },
    {
      "nama": "PENGERANG",
      "kod": "P.157",
    },
    {
      "nama": "TEBRAU",
      "kod": "P.158",
    },
    {
      "nama": "PASIR GUDANG",
      "kod": "P.159",
    },
    {
      "nama": "JOHOR BAHRU",
      "kod": "P.160",
    },
    {
      "nama": "PULAI",
      "kod": "P.161",
    },
    {
      "nama": "ISKANDAR PUTERI",
      "kod": "P.162",
    },
    {
      "nama": "KULAI",
      "kod": "P.163",
    },
    {
      "nama": "PONTIAN",
      "kod": "P.164",
    },
    {
      "nama": "TANJUNG PIAI",
      "kod": "P.165",
    },
    {
      "nama": "LABUAN",
      "kod": "P.166",
    },
    {
      "nama": "KUDAT",
      "kod": "P.167",
    },
    {
      "nama": "KOTA MARUDU",
      "kod": "P.168",
    },
    {
      "nama": "KOTA BELUD",
      "kod": "P.169",
    },
    {
      "nama": "TUARAN",
      "kod": "P.170",
    },
    {
      "nama": "SEPANGGAR",
      "kod": "P.171",
    },
    {
      "nama": "KOTA KINABALU",
      "kod": "P.172",
    },
    {
      "nama": "PUTATAN",
      "kod": "P.173",
    },
    {
      "nama": "PENAMPANG",
      "kod": "P.174",
    },
    {
      "nama": "PAPAR",
      "kod": "P.175",
    },
    {
      "nama": "KIMANIS",
      "kod": "P.176",
    },
    {
      "nama": "BEAUFORT",
      "kod": "P.177",
    },
    {
      "nama": "SIPITANG",
      "kod": "P.178",
    },
    {
      "nama": "RANAU",
      "kod": "P.179",
    },
    {
      "nama": "KENINGAU",
      "kod": "P.180",
    },
    {
      "nama": "TENOM",
      "kod": "P.181",
    },
    {
      "nama": "PENSIANGAN",
      "kod": "P.182",
    },
    {
      "nama": "BELURAN",
      "kod": "P.183",
    },
    {
      "nama": "LIBARAN",
      "kod": "P.184",
    },
    {
      "nama": "BATU SAPI",
      "kod": "P.185",
    },
    {
      "nama": "SANDAKAN",
      "kod": "P.186",
    },
    {
      "nama": "KINABATANGAN",
      "kod": "P.187",
    },
    {
      "nama": "SILAM",
      "kod": "P.188",
    },
    {
      "nama": "SEMPORNA",
      "kod": "P.189",
    },
    {
      "nama": "TAWAU",
      "kod": "P.190",
    },
    {
      "nama": "KALABAKAN",
      "kod": "P.191",
    },
    {
      "nama": "MAS GADING",
      "kod": "P.192",
    },
    {
      "nama": "SANTUBON",
      "kod": "P.193",
    },
    {
      "nama": "PETRA JAYA",
      "kod": "P.194",
    },
    {
      "nama": "BANDAR KUCHING",
      "kod": "P.195",
    },
    {
      "nama": "STAMPIN",
      "kod": "P.196",
    },
    {
      "nama": "KOTA SAMARAHAN",
      "kod": "P.197",
    },
    {
      "nama": "PUNCAK BORNEO",
      "kod": "P.198",
    },
    {
      "nama": "SERIAN",
      "kod": "P.199",
    },
    {
      "nama": "BATANG SADONG",
      "kod": "P.200",
    },
    {
      "nama": "BATANG LUPAR",
      "kod": "P.201",
    },
    {
      "nama": "SRI AMAN",
      "kod": "P.202",
    },
    {
      "nama": "LUBOK ANTU",
      "kod": "P.203",
    },
    {
      "nama": "BETONG",
      "kod": "P.204",
    },
    {
      "nama": "SARATOK",
      "kod": "P.205",
    },
    {
      "nama": "TANJONG MANIS",
      "kod": "P.206",
    },
    {
      "nama": "IGAN",
      "kod": "P.207",
    },
    {
      "nama": "SARIKEI",
      "kod": "P.208",
    },
    {
      "nama": "JULAU",
      "kod": "P.209",
    },
    {
      "nama": "KANOWIT",
      "kod": "P.210",
    },
    {
      "nama": "LANANG",
      "kod": "P.211",
    },
    {
      "nama": "SIBU",
      "kod": "P.212",
    },
    {
      "nama": "MUKAH",
      "kod": "P.213",
    },
    {
      "nama": "SELANGAU",
      "kod": "P.214",
    },
    {
      "nama": "KAPIT",
      "kod": "P.215",
    },
    {
      "nama": "HULU RAJANG",
      "kod": "P.216",
    },
    {
      "nama": "BINTULU",
      "kod": "P.217",
    },
    {
      "nama": "SIBUTI",
      "kod": "P.218",
    },
    {
      "nama": "MIRI",
      "kod": "P.219",
    },
    {
      "nama": "BARAM",
      "kod": "P.220",
    },
    {
      "nama": "LIMBANG",
      "kod": "P.221",
    },
    {
      "nama": "LAWAS",
      "kod": "P.222",
    },
  ];
  return [];

  return parlimens;
}
