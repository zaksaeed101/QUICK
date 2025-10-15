// Step 1: Assessed BOE Data
const assessedData = {
  40325141031: {
    boe_no: "40325141031",
    status: "Assessed",
    pdf_date: "07/03/2025 17:55:31",
    amount: "3,013.56 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40425194368: {
    boe_no: "40425194368",
    status: "Assessed",
    pdf_date: "04/04/2025 17:30:23",
    amount: "1,411.52 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40425194359: {
    boe_no: "40425194359",
    status: "Assessed",
    pdf_date: "04/04/2025 16:35:12",
    amount: "3,447.09 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40425209752: {
    boe_no: "40425209752",
    status: "Assessed",
    pdf_date: "10/04/2025 16:27:12",
    amount: "808.78 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40425209871: {
    boe_no: "40425209871",
    status: "Assessed",
    pdf_date: "10/04/2025 16:12:27",
    amount: "821.56 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40425210423: {
    boe_no: "40425210423",
    status: "Assessed",
    pdf_date: "11/04/2025 16:01",
    amount: "3,938.15 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40425210430: {
    boe_no: "40425210430",
    status: "Assessed",
    pdf_date: "11/04/2025 16:09",
    amount: "3,877.92 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40425210446: {
    boe_no: "40425210446",
    status: "Assessed",
    pdf_date: "11/04/2025 16:18",
    amount: "3,447.09 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40425210451: {
    boe_no: "40425210451",
    status: "Assessed",
    pdf_date: "11/04/2025 16:22",
    amount: "3,447.09 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40425210465: {
    boe_no: "40425210465",
    status: "Assessed",
    pdf_date: "11/04/2025 16:29",
    amount: "3,447.09 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40425210474: {
    boe_no: "40425210474",
    status: "Assessed",
    pdf_date: "11/04/2025 16:31",
    amount: "3,447.09 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40425210419: {
    boe_no: "40425210419",
    status: "Assessed",
    pdf_date: "11/04/2025 15:36",
    amount: "1,411.52 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40425213688: {
    boe_no: "40425213688",
    status: "Assessed",
    pdf_date: "12/04/2025 18:13",
    amount: "1,020.66 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40425213802: {
    boe_no: "40425213802",
    status: "Assessed",
    pdf_date: "12/04/2025 17:27",
    amount: "485.35 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40425219087: {
    boe_no: "40425219087",
    status: "Assessed",
    pdf_date: "15/04/25  16:21",
    amount: "612.11 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40425217209: {
    boe_no: "40425217209",
    status: "Assessed",
    pdf_date: "16/04/25 15:36",
    amount: "1,679.52 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40425231695: {
    boe_no: "40425231695",
    status: "Assessed",
    pdf_date: "22/04/25 15:57:12",
    amount: "610.11 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40425233827: {
    boe_no: "40425233827",
    status: "Assessed",
    pdf_date: "24/04/25 15:28:32",
    amount: "922.14 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40425233816: {
    boe_no: "40425233816",
    status: "Assessed",
    pdf_date: "24/04/25 15:22:12",
    amount: "780.23 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40425236429: {
    boe_no: "40425236429",
    status: "Assessed",
    pdf_date: "25/04/2025 16:01:02",
    amount: "3,938.15 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40425236435: {
    boe_no: "40425236435",
    status: "Assessed",
    pdf_date: "25/04/2025 16:09:10",
    amount: "3,876.92 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40425236478: {
    boe_no: "40425236478",
    status: "Assessed",
    pdf_date: "25/04/2025 16:18:12",
    amount: "3,447.09 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40425236491: {
    boe_no: "40425236491",
    status: "Assessed",
    pdf_date: "25/04/2025 16:23:25",
    amount: "3,447.09 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40425236506: {
    boe_no: "40425236506",
    status: "Assessed",
    pdf_date: "25/04/2025 16:30:12",
    amount: "3,447.09 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40425236552: {
    boe_no: "40425236552",
    status: "Assessed",
    pdf_date: "25/04/2025 16:59:43",
    amount: "3,447.09 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40425236489: {
    boe_no: "40425236489",
    status: "Assessed",
    pdf_date: "25/04/2025 17:11:20",
    amount: "2,070.43 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40425236453: {
    boe_no: "40425236453",
    status: "Assessed",
    pdf_date: "25/04/2025 17:53:35",
    amount: "922.90 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40425247619: {
    boe_no: "40425247619",
    status: "Assessed",
    pdf_date: "29/04/2025 16:13:32",
    amount: "1,070.90 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40425248613: {
    boe_no: "40425248613",
    status: "Assessed",
    pdf_date: "30/04/2025 15:02:23",
    amount: "1,532.89 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40425248658: {
    boe_no: "40425263738",
    status: "Assessed",
    pdf_date: "07/05/2025 15:14:38",
    amount: "2,401.70 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40425252880: {
    boe_no: "40425252880",
    status: "Assessed",
    pdf_date: "01/05/2025 14:13:12",
    amount: "1,243.90 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40525251034: {
    boe_no: "40425263721",
    status: "Assessed",
    pdf_date: "07/05/2025 15:39:10",
    amount: "1,560.52 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40525251048: {
    boe_no: "40525251048",
    status: "Assessed",
    pdf_date: "02/05/2025 16:09:18",
    amount: "3,876.92 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40525251093: {
    boe_no: "40525251093",
    status: "Assessed",
    pdf_date: "02/05/2025 16:21:47",
    amount: "3,447.09 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40525251079: {
    boe_no: "40525251079",
    status: "Assessed",
    pdf_date: "02/05/2025 16:18:07",
    amount: "3,447.09 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40425262913: {
    boe_no: "40425262913",
    status: "Assessed",
    pdf_date: "06/05/2025 15:42:09",
    amount: "816.78 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40425262792: {
    boe_no: "40525279669",
    status: "Assessed",
    pdf_date: "13/05/2025 17:13:31",
    amount: "1,201.67 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40425262928: {
    boe_no: "40425262928",
    status: "Assessed",
    pdf_date: "06/05/2025 18:00:12",
    amount: "904.23 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40525263781: {
    boe_no: "40525263781",
    status: "Assessed",
    pdf_date: "07/05/2025 19:27:49",
    amount: "485.35 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40525263863: {
    boe_no: "40525263863",
    status: "Assessed",
    pdf_date: "08/05/25 15:13:14",
    amount: "1,090.12 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40525263836: {
    boe_no: "40525263836",
    status: "Assessed",
    pdf_date: "08/05/25 15:41:10",
    amount: "731.26 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40525272195: {
    boe_no: "40525272195",
    status: "Assessed",
    pdf_date: "09/05/2025 15:39:21",
    amount: "3,876.92 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40525272208: {
    boe_no: "40525272208",
    status: "Assessed",
    pdf_date: "09/05/2025 16:12:01",
    amount: "3,447.09 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40525272241: {
    boe_no: " 40525272241",
    status: "Assessed",
    pdf_date: "09/05/2025 16:23:45",
    amount: "3,447.09 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40525288362: {
    boe_no: "40525288362",
    status: "Assessed",
    pdf_date: "16/05/25 17:41:42",
    amount: "1,660.55 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40525287907: {
    boe_no: "40525287907",
    status: "Assessed",
    pdf_date: "16/05/2025 15:39:02",
    amount: "2,102.45 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40525287912: {
    boe_no: "40525287912",
    status: "Assessed",
    pdf_date: "16/05/2025 15:41:12",
    amount: "3,850.37 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40525287929: {
    boe_no: "40525287929",
    status: "Assessed",
    pdf_date: "16/05/2025 16:01:10",
    amount: "3,926.01 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40525287951: {
    boe_no: "40525287951",
    status: "Assessed",
    pdf_date: "16/05/2025 16:19:09",
    amount: "3,435.93 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40525287966: {
    boe_no: "40525287966",
    status: "Assessed",
    pdf_date: "16/05/2025 16:23:13",
    amount: "3,435.93 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40525287971: {
    boe_no: "40525287971",
    status: "Assessed",
    pdf_date: "16/05/2025 16:30:39",
    amount: "3,435.93 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40525287980: {
    boe_no: "40525287980",
    status: "Assessed",
    pdf_date: "16/05/2025 16:35:52",
    amount: "3,435.93 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40525287906: {
    boe_no: "40525287906",
    status: "Assessed",
    pdf_date: "16/05/25 15:39:12",
    amount: "2,102.45 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40525297093: {
    boe_no: "40525297093",
    status: "Assessed",
    pdf_date: "20/05/25 17:39:09",
    amount: "1,208.43 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40525297088: {
    boe_no: "40525297088",
    status: "Assessed",
    pdf_date: "20/05/2025 17:13:43",
    amount: "1,009.67 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40525299638: {
    boe_no: "40525316835",
    status: "Assessed",
    pdf_date: "28/05/25 16:01:09",
    amount: "2,306.54 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40525299679: {
    boe_no: "40525316819",
    status: "Assessed",
    pdf_date: "28/05/25 15:59:45",
    amount: "1,502.87 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40525303956: {
    boe_no: "40525303956",
    status: "Assessed",
    pdf_date: "22/05/25 15:18:19",
    amount: "1,020.43 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40525303993: {
    boe_no: "40525303993",
    status: "Assessed",
    pdf_date: "22/05/25 17:53:01",
    amount: "1,211.43 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40525306527: {
    boe_no: "40525306527",
    status: "Assessed",
    pdf_date: "23/05/25 17:13:08",
    amount: "2,310.55 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40525305671: {
    boe_no: "40525305671",
    status: "Assessed",
    pdf_date: "23/05/2025 16:19:02",
    amount: "3,435.93 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40525305637: {
    boe_no: "40525305637",
    status: "Assessed",
    pdf_date: "23/05/2025 16:01:07",
    amount: "3,926.01 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40525305648: {
    boe_no: " 40525305648",
    status: "Assessed",
    pdf_date: "23/05/2025 15:41:34",
    amount: "3,850.37 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40525305618: {
    boe_no: " 40525305618",
    status: "Assessed",
    pdf_date: "23/05/25 15:46:12",
    amount: "1,108.43 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40525305623: {
    boe_no: " 40525305623",
    status: "Assessed",
    pdf_date: "23/05/25 16:01:10",
    amount: "1,402.77 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40525306729: {
    boe_no: "40525306729",
    status: "Assessed",
    pdf_date: "24/05/25 15:49:11",
    amount: "1,257.43 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40525306751: {
    boe_no: " 40525306751",
    status: "Assessed",
    pdf_date: "24/05/25 15:51:01",
    amount: "670.78 GHS GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40525306701: {
    boe_no: "40525306701",
    status: "Assessed",
    pdf_date: "24/05/25 15:31:04",
    amount: "1,402.77 GHS GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40525306713: {
    boe_no: "40525306713",
    status: "Assessed",
    pdf_date: "24/05/25 15:46:41",
    amount: "1,108.43 GHS GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40525316849: {
    boe_no: "40525316849",
    status: "Assessed",
    pdf_date: "28/05/25 16:19:11",
    amount: "1,260.55 GHS GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40525323761: {
    boe_no: " 40525323761",
    status: "Assessed",
    pdf_date: "30/05/2025 16:19:11",
    amount: "3,435.93 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40525323726: {
    boe_no: "40525323726",
    status: "Assessed",
    pdf_date: "30/05/2025 16:01:16",
    amount: "3,926.01 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40525323734: {
    boe_no: "40525323734",
    status: "Assessed",
    pdf_date: "30/05/2025 15:41:26",
    amount: "3,850.37 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40525323712: {
    boe_no: "40525323712",
    status: "Assessed",
    pdf_date: "30/05/2025 15:28:09",
    amount: "1,905.43 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40525325826: {
    boe_no: "40525325826",
    status: "Assessed",
    pdf_date: "31/05/2025 16:13:09",
    amount: "1,102.89 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40525325761: {
    boe_no: "40525325761",
    status: "Assessed",
    pdf_date: "31/05/2025 15:03:59",
    amount: "1,050.12 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40625331218: {
    boe_no: "40625331218",
    status: "Assessed",
    pdf_date: "03/06/2025 15:36:09",
    amount: "1,045.09 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40625331239: {
    boe_no: "40625331239",
    status: "Assessed",
    pdf_date: "03/06/2025 15:51:09",
    amount: "925.85 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40625331257: {
    boe_no: "40625331257",
    status: "Assessed",
    pdf_date: "03/06/2025 16:02:01",
    amount: "1,105.12 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40625331619: {
    boe_no: "40625331619",
    status: "Assessed",
    pdf_date: "03/06/2025 17:50:07",
    amount: "954.67 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40625332247: {
    boe_no: "40625332247",
    status: "Assessed",
    pdf_date: "04/06/2025 16:11:01",
    amount: "2,649.19 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40625332190: {
    boe_no: "40625332190",
    status: "Assessed",
    pdf_date: "04/06/2025 16:02:52",
    amount: "2,220.49 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40625342518: {
    boe_no: " 40625342518",
    status: "Assessed",
    pdf_date: "10/06/2025 15:36:52",
    amount: "932.78 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40625342527: {
    boe_no: "40625342527",
    status: "Assessed",
    pdf_date: "10/06/2025 15:49:18",
    amount: "1,257.43 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40625343602: {
    boe_no: "40625343602",
    status: "Assessed",
    pdf_date: "11/06/2025 15:39:11",
    amount: "1,440.55 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40625345156: {
    boe_no: "40625345156",
    status: "Assessed",
    pdf_date: "12/06/2025 16:01:21",
    amount: "1,149.07 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40625345145: {
    boe_no: "40625345145",
    status: "Assessed",
    pdf_date: "12/06/2025 15:51:01",
    amount: "1,117.83 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40625345137: {
    boe_no: "40625345137",
    status: "Assessed",
    pdf_date: "12/06/2025 15:43:08",
    amount: "2,043.12 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40625345128: {
    boe_no: "40625345128",
    status: "Assessed",
    pdf_date: "12/06/2025 15:43:17",
    amount: "2,043.12 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40625369407: {
    boe_no: "40625369407",
    status: "Assessed",
    pdf_date: "20/06/2025 15:39:23",
    amount: "1,854.55 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40625369435: {
    boe_no: "40625369435",
    status: "Assessed",
    pdf_date: "20/06/2025 15:46:13",
    amount: "721.09 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40625369478: {
    boe_no: "40625369478",
    status: "Assessed",
    pdf_date: "20/06/2025 15:59:09",
    amount: "1,257.43 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40625374209: {
    boe_no: "40625374209",
    status: "Assessed",
    pdf_date: "24/06/2025 17:50:09",
    amount: "921.89 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40625378838: {
    boe_no: "40625378838",
    status: "Assessed",
    pdf_date: "24/06/2025 19:18:44",
    amount: "867.12 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40625379217: {
    boe_no: "40625379217",
    status: "Assessed",
    pdf_date: "25/06/2025 15:39:24",
    amount: "1,854.55 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40725395908: {
    boe_no: "40725395908",
    status: "Assessed",
    pdf_date: "01/07/2025 16:01:24",
    amount: "1,149.07 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40725395937: {
    boe_no: "40725395937",
    status: "Assessed",
    pdf_date: "01/07/2025 16:12:21",
    amount: "828.13 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40725395986: {
    boe_no: "40725395986",
    status: "Assessed",
    pdf_date: "01/07/2025 16:02:31",
    amount: "1,314.89 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40725403617: {
    boe_no: "40725403617",
    status: "Assessed",
    pdf_date: "03/07/2025 17:37:11",
    amount: "2,025.12 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40725405521: {
    boe_no: "40725405521",
    status: "Assessed",
    pdf_date: "04/07/2025 17:01:11",
    amount: "714.67 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40725405516: {
    boe_no: "40725405516",
    status: "Assessed",
    pdf_date: "04/07/2025 16:30:09",
    amount: "1,061.65 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40725405167: {
    boe_no: "40725405167",
    status: "Assessed",
    pdf_date: "04/07/2025 17:15:29",
    amount: "3,926.01 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40725405159: {
    boe_no: "40725405159",
    status: "Assessed",
    pdf_date: "04/07/2025 16:55:09",
    amount: "3,435.93 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40725405146: {
    boe_no: "40725405146",
    status: "Assessed",
    pdf_date: "04/07/2025 16:41:09",
    amount: "3,435.93 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40725405135: {
    boe_no: "40725405135",
    status: "Assessed",
    pdf_date: "04/07/2025 16:35:59",
    amount: "3,850.37 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
 40725405127: {
    boe_no: "40725405127",
    status: "Assessed",
    pdf_date: "04/07/2025 16:15:19",
    amount: "3,850.37 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
 40725405108: {
    boe_no: "40725405108",
    status: "Assessed",
    pdf_date: "04/07/2025 16:09:55",
    amount: "3,850.37 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
 40725409689: {
    boe_no: "40725409689",
    status: "Assessed",
    pdf_date: "05/07/2025 16:08:35",
    amount: "1,109.46 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
40725409612: {
    boe_no: "40725409612",
    status: "Assessed",
    pdf_date: "05/07/2025 15:23:37",
    amount: "1,109.46 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
40725409638: {
    boe_no: "40725409638",
    status: "Assessed",
    pdf_date: "05/07/2025 15:49:02",
    amount: "1,307.05 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
40725409661: {
    boe_no: "40725409661",
    status: "Assessed",
    pdf_date: "05/07/2025 16:01:03",
    amount: "1,109.46 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
40725408713: {
    boe_no: "40725408713",
    status: "Assessed",
    pdf_date: "08/07/2025 15:13:05",
    amount: "1,821.18 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
40725408746: {
    boe_no: "40725408746",
    status: "Assessed",
    pdf_date: "08/07/2025 16:00:35",
    amount: "1,219.46 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
50725408759: {
    boe_no: "40725408759",
    status: "Assessed",
    pdf_date: "08/07/2025 16:12:38",
    amount: "89,219.46 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40825492317: {
    boe_no: "40825492317",
    status: "Assessed",
    pdf_date: "08/08/2025 16:13:24",
    amount: "4,291.84 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40825492347: {
    boe_no: "40825492347",
    status: "Assessed",
    pdf_date: "08/08/2025 16:41:05",
    amount: "4,005.39 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40825492336: {
    boe_no: "40825492336",
    status: "Assessed",
    pdf_date: "08/08/2025 16:28:55",
    amount: "4,374.74 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40825503426: {
    boe_no: "40825503426",
    status: "Assessed",
    pdf_date: "15/08/2025 16:13:55",
    amount: "4,291.84 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40825503437: {
    boe_no: "40825503437",
    status: "Assessed",
    pdf_date: "15/08/2025 16:28:23",
    amount: "4,375.74 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40825503469: {
    boe_no: "40825503469",
    status: "Assessed",
    pdf_date: "15/08/2025 16:41:03",
    amount: "4,005.39 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40825526518: {
    boe_no: "40825526518",
    status: "Assessed",
    pdf_date: "22/08/2025 16:13:21",
    amount: "4,291.84 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40825526583: {
    boe_no: "40825526583",
    status: "Assessed",
    pdf_date: "22/08/2025 16:41:37",
    amount: "4,005.39 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40825526549: {
    boe_no: "40825526549",
    status: "Assessed",
    pdf_date: "22/08/2025 16:28:12",
    amount: "4,374.74 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40925563586: {
    boe_no: "40925563586",
    status: "Assessed",
    pdf_date: "05/09/2025 16:28:12",
    amount: "4,375.74 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40925563579: {
    boe_no: "40925563579",
    status: "Assessed",
    pdf_date: "05/09/2025 16:41:37",
    amount: "4,005.39 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40925563527: {
    boe_no: "40925563527",
    status: "Assessed",
    pdf_date: "05/09/2025 16:13:21",
    amount: "4,291.84 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40925579154: {
    boe_no: "40925579154",
    status: "Assessed",
    pdf_date: "12/09/2025 16:41:37",
    amount: "4,005.39 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40925579139: {
    boe_no: "40925579139",
    status: "Assessed",
    pdf_date: "12/09/2025 16:28:12",
    amount: "4,375.74 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40925579126: {
    boe_no: "40925579126",
    status: "Assessed",
    pdf_date: "12/09/2025 16:13:21",
    amount: "4,291.84 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40925615915: {
    boe_no: "40925615915",
    status: "Assessed",
    pdf_date: "26/09/2025 18:16:32",
    amount: "4,291.84 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40925615895: {
    boe_no: "40925615895",
    status: "Assessed",
    pdf_date: "26/09/2025 17:48:07",
    amount: "4,005.39 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40925615878: {
    boe_no: "40925615878",
    status: "Assessed",
    pdf_date: "26/09/2025 17:31:22",
    amount: "4,375.74 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40925615801: {
    boe_no: "40925615801",
    status: "Assessed",
    pdf_date: "26/09/2025 16:41:57",
    amount: "4,005.39 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40925615817: {
    boe_no: "40925615817",
    status: "Assessed",
    pdf_date: "26/09/2025 16:13:02",
    amount: "4,291.84 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  40925615759: {
    boe_no: "40925615759",
    status: "Assessed",
    pdf_date: "26/09/2025 16:33:58",
    amount: "4,375.74 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  41025632675: {
    boe_no: "41025632675",
    status: "Assessed",
    pdf_date: "03/10/2025 17:33:10",
    amount: "4,375.74 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  41025632614: {
    boe_no: "41025632614",
    status: "Assessed",
    pdf_date: "03/10/2025 17:48:07",
    amount: "4,005.39 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  41025632639: {
    boe_no: "41025632639",
    status: "Assessed",
    pdf_date: "10/10/2025 16:04:58",
    amount: "4,375.74 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  41025650326: {
    boe_no: "41025650326",
    status: "Assessed",
    pdf_date: "10/10/2025 16:04:58",
    amount: "4,375.74 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  41025650398: {
    boe_no: "41025650398",
    status: "Assessed",
    pdf_date: "10/10/2025 17:31:22",
    amount: "4,375.74 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  41025650311: {
    boe_no: "41025650311",
    status: "Assessed",
    pdf_date: "10/10/2025 17:35:23",
    amount: "4,005.39 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  41025650360: {
    boe_no: "41025650360",
    status: "Assessed",
    pdf_date: "10/10/2025 16:38:04",
    amount: "4,005.39 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
  41025650383: {
    boe_no: "41025650383",
    status: "Assessed",
    pdf_date: "10/10/2025 17:01:52",
    amount: "4,291.84 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
 41025650345: {
    boe_no: "41025650345",
    status: "Assessed",
    pdf_date: "10/10/2025 16:16:02",
    amount: "4,291.84 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking: "Declaration Tracking",
  },
};

// Step 2: Get Query Param
function getQueryParam(param) {
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
}

// Step 3: Display BOE Info
function displayAssessedDetails() {
  const boeNumber = getQueryParam("boe_no");
  if (!boeNumber) {
    // alert("No BOE number provided!");
    return;
  }

  const details = assessedData[boeNumber];
  if (details) {
    document.getElementById("boe_no").textContent = `${details.boe_no}`;
    document.getElementById("status").textContent = details.status;
    document.getElementById("pdf_date").textContent = details.pdf_date;
    document.getElementById("amount").textContent = details.amount;
    document.getElementById("watermark").textContent = details.watermark;
    document.getElementById("tracking").textContent = details.tracking;
  }
}

// Step 4: Call on Page Load
displayAssessedDetails();
