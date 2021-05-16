import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



const data = [
  {
    "centers": [
        {
            "center_id": 8776,
            "name": "Maternity And Gynae Hospital",
            "address": "Dist Hosp - Maternity And Gynae R K Puram",
            "state_name": "Delhi",
            "district_name": "New Delhi",
            "block_name": "Not Applicable",
            "pincode": 110022,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "7aa1b3f6-e42a-4d2d-bd79-c34630f127c7",
                    "date": "16-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "9a2a2638-96c9-4e2f-bc52-da253725a7fc",
                    "date": "17-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "e5308e20-4e0b-44dd-9c93-d9a56d0601ec",
                    "date": "18-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "07407947-406f-4303-a826-36b6af343082",
                    "date": "19-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "c72d6080-2ffc-454e-baea-a359db4b8d41",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "2268426b-4472-43d7-b408-63cf12edea3c",
                    "date": "21-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "f46dc610-2576-4fed-9937-c5684c251d27",
                    "date": "22-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                }
            ]
        },
        {
            "center_id": 698134,
            "name": "President House",
            "address": "Rashtrapati Bhawan Presidents Estate. New Delhi 110004",
            "state_name": "Delhi",
            "district_name": "New Delhi",
            "block_name": "Not Applicable",
            "pincode": 110004,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "804b5289-6994-4a1d-b195-90dd1e5e6cf6",
                    "date": "16-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                }
            ]
        },
        {
            "center_id": 8802,
            "name": "MH Munirka CHC",
            "address": "Baba Gang Nath Marg, Munrika",
            "state_name": "Delhi",
            "district_name": "New Delhi",
            "block_name": "Not Applicable",
            "pincode": 110067,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "0f3cf829-8eba-409b-920b-a951c9a843d8",
                    "date": "16-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "c9f03d36-0960-45ec-8829-cb00fdfeb1b7",
                    "date": "17-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "dad0973b-dade-41a5-9b39-3cb8733e8de5",
                    "date": "18-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "2c0ad177-404b-4772-a59a-300fa7a90ce0",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "79d54dfe-bd57-4205-9b3f-8b1e4fc41551",
                    "date": "22-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                }
            ]
        },
        {
            "center_id": 692131,
            "name": "NRCH Site 2",
            "address": "Northern Railway Central Hospital Basant Lane New Delhi",
            "state_name": "Delhi",
            "district_name": "New Delhi",
            "block_name": "Not Applicable",
            "pincode": 110055,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "14:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "5a877bc1-08f4-4b05-9a88-bc117b4c8ba9",
                    "date": "16-05-2021",
                    "available_capacity": 47,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-10:00AM",
                        "10:00AM-11:00AM",
                        "11:00AM-12:00PM",
                        "12:00PM-02:00PM"
                    ]
                },
                {
                    "session_id": "9907f4da-a037-4abf-9c86-76208f10f249",
                    "date": "17-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-04:00PM"
                    ]
                },
                {
                    "session_id": "650d7720-66ec-46c5-836e-9493593a4419",
                    "date": "18-05-2021",
                    "available_capacity": 7.105427357601002e-15,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-04:00PM"
                    ]
                },
                {
                    "session_id": "27af2ec8-8ea5-4594-a140-9ac428b0d235",
                    "date": "19-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-04:00PM"
                    ]
                },
                {
                    "session_id": "4f5d45c8-35bf-4842-bad4-8b2b0fe101cd",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-04:00PM"
                    ]
                }
            ]
        },
        {
            "center_id": 563035,
            "name": "Northern Railway Central",
            "address": "Northern Railway Central Hospital",
            "state_name": "Delhi",
            "district_name": "New Delhi",
            "block_name": "Not Applicable",
            "pincode": 110055,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "14:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "a489bdb3-b5a6-4273-ad90-80de583185e1",
                    "date": "16-05-2021",
                    "available_capacity": 40,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-10:00AM",
                        "10:00AM-11:00AM",
                        "11:00AM-12:00PM",
                        "12:00PM-02:00PM"
                    ]
                },
                {
                    "session_id": "5ec34c78-79f9-4fe4-8463-9047351ab126",
                    "date": "17-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-04:00PM"
                    ]
                },
                {
                    "session_id": "c09e49d8-3b02-4304-b5ac-a7ee571bf75e",
                    "date": "18-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-04:00PM"
                    ]
                },
                {
                    "session_id": "0a1ccacf-bf38-4b12-b4ac-847692b92386",
                    "date": "19-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-04:00PM"
                    ]
                },
                {
                    "session_id": "96b4bcf8-6700-437a-ad8d-4d373a5c1a8b",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-04:00PM"
                    ]
                },
                {
                    "session_id": "eb6c53f3-0238-4216-8e5a-cbb7ec66b539",
                    "date": "21-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-04:00PM"
                    ]
                },
                {
                    "session_id": "c54b09a6-cc8f-44e2-aaaf-5b951d8b24f1",
                    "date": "22-05-2021",
                    "available_capacity": 1,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-12:30PM"
                    ]
                }
            ]
        },
        {
            "center_id": 580924,
            "name": "Fortis Hospital Site 2",
            "address": "Vasant Kunj New Delhi",
            "state_name": "Delhi",
            "district_name": "New Delhi",
            "block_name": "Not Applicable",
            "pincode": 110037,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "18:00:00",
            "fee_type": "Paid",
            "sessions": [
                {
                    "session_id": "eda9522c-a992-4032-9d4f-6a7685331213",
                    "date": "16-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 18,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-06:00PM"
                    ]
                },
                {
                    "session_id": "eaab5a73-7073-4a52-be8f-3d4c5f151f04",
                    "date": "17-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 18,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-06:00PM"
                    ]
                },
                {
                    "session_id": "f0d12cc3-3d97-41e5-8b16-b76d60577954",
                    "date": "18-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 18,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-06:00PM"
                    ]
                }
            ],
            "vaccine_fees": [
                {
                    "vaccine": "COVAXIN",
                    "fee": "1250"
                }
            ]
        },
        {
            "center_id": 679800,
            "name": "MHA North Block",
            "address": "North Block Central Secretariat New Delhi Delhi 110001",
            "state_name": "Delhi",
            "district_name": "New Delhi",
            "block_name": "Central Delhi",
            "pincode": 110001,
            "lat": 0,
            "long": 0,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "27d8cb8b-5382-4356-ba89-a4c3900868c2",
                    "date": "17-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "143a456d-4943-43b3-9705-b5e41db1aae1",
                    "date": "18-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "565cd9e7-f4ac-4cf7-8bc5-63aa1e130bb0",
                    "date": "19-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "98b2d328-737c-4922-ab2d-719f81ae1ab4",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "086c20a0-a82c-45a0-9bcc-54010436e8fa",
                    "date": "21-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "b03a55e3-14fe-41d5-8ac0-509de2d7dadc",
                    "date": "22-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                }
            ]
        },
        {
            "center_id": 608396,
            "name": "CGHS RK Puram-4 Sec-8",
            "address": "RK Puram-4 Sec-8 New Delhi",
            "state_name": "Delhi",
            "district_name": "New Delhi",
            "block_name": "Not Applicable",
            "pincode": 110022,
            "lat": 28,
            "long": 76,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "fc8ab6bb-6ac1-49cc-a864-104e10413d2a",
                    "date": "17-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "7664e1a8-9bb1-4f93-9599-defb8735e7c2",
                    "date": "18-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "3134ec72-6fdd-40cd-abf7-6f77c8854afd",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "af23c413-493e-4e27-8f4d-555cfe5c839b",
                    "date": "22-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                }
            ]
        },
        {
            "center_id": 626629,
            "name": "NIHFW Munirka",
            "address": "NIHFW Munirka",
            "state_name": "Delhi",
            "district_name": "New Delhi",
            "block_name": "Not Applicable",
            "pincode": 110067,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "458e63e9-eb4e-42a2-bf8d-0b7454b82d2b",
                    "date": "17-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "d06721cd-a777-4c2c-8022-a1e75e0b2d7d",
                    "date": "18-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "d7cad043-ceb3-4f59-903b-8cfb0ad607e3",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "da45a2f9-40b2-4826-bba9-caf4a42efd2d",
                    "date": "22-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                }
            ]
        },
        {
            "center_id": 8815,
            "name": "MCW Reading Road NDMC PHC",
            "address": "Old Auto Workshop Building, Mandir Marg, New Delhi -110001",
            "state_name": "Delhi",
            "district_name": "New Delhi",
            "block_name": "Not Applicable",
            "pincode": 110001,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "7e152c4a-fca9-4bd0-b86e-d3ae67f6329f",
                    "date": "17-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "bb38e2dc-101b-4fe3-86b2-2ff54768639e",
                    "date": "18-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "277a2f55-be3b-436e-a702-e7e3e1c7aac4",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "8ee2a15c-9dd3-4544-936b-e8ca665ae21a",
                    "date": "22-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                }
            ]
        },
        {
            "center_id": 8785,
            "name": "CGHS Dispensary South Avenue",
            "address": "153, South Avenue , New Delhi-11",
            "state_name": "Delhi",
            "district_name": "New Delhi",
            "block_name": "Not Applicable",
            "pincode": 110001,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "b2d87235-2855-49d4-98a8-d002f7da4786",
                    "date": "17-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "06b9d73d-d4b8-4eb9-a684-6cd2153f04ee",
                    "date": "18-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "3e816d05-7012-488e-bc55-aa4c9ca1d52f",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "ad31f22c-94f5-4330-b419-a6ad6f1bf26f",
                    "date": "22-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                }
            ]
        },
        {
            "center_id": 627344,
            "name": "DGHC Supreme Court",
            "address": "DGHC Supreme Court Complex, Bhagwan Das Road",
            "state_name": "Delhi",
            "district_name": "New Delhi",
            "block_name": "Not Applicable",
            "pincode": 110001,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "740fbd89-f847-4f94-b8a9-6900d894aabd",
                    "date": "17-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "5cd8f740-e35c-4041-b157-3e4d1cc84858",
                    "date": "18-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "aefa4824-c79b-4847-ade1-1730848adfa9",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "2c596772-8c0b-41ab-a8a5-ca3939a5e8e2",
                    "date": "22-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                }
            ]
        },
        {
            "center_id": 8817,
            "name": "MCW Shishu Kalyan Kendra PHC",
            "address": "Shaheed Bhagat Singh Road Poly Clinic",
            "state_name": "Delhi",
            "district_name": "New Delhi",
            "block_name": "Not Applicable",
            "pincode": 110001,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "88d5ace6-395b-4b77-b1ae-fe46d38b6a60",
                    "date": "17-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "950d3460-ec5d-4013-9b95-25ceaf14cfa1",
                    "date": "18-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "6514a4a8-7c8c-42f7-8291-0c7d153a854c",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "f8c702db-2104-48f9-8968-fcabefcc56ee",
                    "date": "22-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                }
            ]
        },
        {
            "center_id": 608429,
            "name": "CGHS Dr.Zakir Hussain Road",
            "address": "Dr. Zakir Hussain Road D 44 Near Pandara Road",
            "state_name": "Delhi",
            "district_name": "New Delhi",
            "block_name": "Not Applicable",
            "pincode": 110003,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "b8df6cd5-8b98-4ac0-8067-a69466c25183",
                    "date": "17-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "e8bd8c79-4b80-43f4-bd5a-40afbbfe6808",
                    "date": "18-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "e9d192aa-9d55-4f9c-bb02-42ad50dc66c2",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "27303309-06e2-484a-85d5-6e9048d71120",
                    "date": "22-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                }
            ]
        },
        {
            "center_id": 608288,
            "name": "MCW Nangal Raya",
            "address": "MCW Centre Nangal, Opp Chanchal Park, New Delhi",
            "state_name": "Delhi",
            "district_name": "New Delhi",
            "block_name": "Not Applicable",
            "pincode": 110046,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "2c577ca2-733f-4a33-a9a4-b091f6e080cf",
                    "date": "17-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "e1abbe8a-111b-4ba1-8e12-65996c4882b7",
                    "date": "18-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "45c81961-3a01-46c2-b385-5725a4fe0dfe",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "70c5ffba-bfb0-4baf-b9f0-4798ed0bfe04",
                    "date": "22-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                }
            ]
        },
        {
            "center_id": 675247,
            "name": "Air Force Station Rajokari",
            "address": "SMC 25 Wing Air Force, Rajokari New Delhi",
            "state_name": "Delhi",
            "district_name": "New Delhi",
            "block_name": "Not Applicable",
            "pincode": 110038,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "a595df97-cddd-478b-aa70-12362427a748",
                    "date": "17-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "675575e6-ef1f-41cf-8cd3-4b0b13b1fe72",
                    "date": "18-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "6dc0ba32-ce2e-4b79-97dc-74922571d3bf",
                    "date": "19-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "b420583e-b487-443d-975f-c5c2edcac272",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "dd054d6f-72e2-43ad-bfe0-1a7958ad67db",
                    "date": "21-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "8b568b97-e32e-4f35-a532-192eaf2974c4",
                    "date": "22-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                }
            ]
        },
        {
            "center_id": 662447,
            "name": "ICGS Delhi",
            "address": "MI Room, National Stadium Complex, New Delhi, 110001",
            "state_name": "Delhi",
            "district_name": "New Delhi",
            "block_name": "Not Applicable",
            "pincode": 110001,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "0c0a4a3f-d5d9-4d5d-b8ca-8b1936757105",
                    "date": "17-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "29d11af6-97aa-425f-ba0f-1f47df9a1489",
                    "date": "18-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "780e2e0b-19d7-42dd-843a-6db81a0db601",
                    "date": "19-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "58b1115e-2d2e-4ed7-af73-5b6618c0035e",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "1bff803d-7b63-4691-89d7-c43be49229bb",
                    "date": "21-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "d39f71e9-e620-40ef-8256-f11c8adceabb",
                    "date": "22-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                }
            ]
        },
        {
            "center_id": 8800,
            "name": "AFND Wellington Camp",
            "address": "Old Willingdon Camp, Safdarjung Tomb, Delhi Race Club",
            "state_name": "Delhi",
            "district_name": "New Delhi",
            "block_name": "Not Applicable",
            "pincode": 110003,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "65d02942-1cee-445d-8bcb-0a2e6b1cddf4",
                    "date": "17-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "9243ae4e-bab2-4954-9e44-a44b60dedf7f",
                    "date": "18-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "1609403a-60f2-4c3f-8141-47c702555c59",
                    "date": "19-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "4f56725a-7bff-4f25-af0c-8aac78307f4c",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "ff0972c3-861e-4c72-a825-d72aa05220d7",
                    "date": "21-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "d0fc02af-65dc-4bd1-a104-f374dd75d715",
                    "date": "22-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                }
            ]
        },
        {
            "center_id": 8784,
            "name": "CGHS Disp Sarojini Nagar",
            "address": "Y-342-346, Sarojini Nagar",
            "state_name": "Delhi",
            "district_name": "New Delhi",
            "block_name": "Not Applicable",
            "pincode": 110023,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "23256f20-746d-4bfc-8a03-9475fabc6bbd",
                    "date": "17-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "cbf9fff0-6aab-474a-b880-fc47482fe7a3",
                    "date": "18-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "9cbf7cfa-64db-49a2-973e-06288acfecf8",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "e8f3c527-0f59-417d-add1-764b5b440386",
                    "date": "22-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                }
            ]
        },
        {
            "center_id": 8778,
            "name": "CGHS Dispensary Nanakpura PHC",
            "address": "CGHS Disp. Building, Gurudwara Road Near Post Office, Nanakpura",
            "state_name": "Delhi",
            "district_name": "New Delhi",
            "block_name": "Not Applicable",
            "pincode": 110021,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "7f4acb51-7f80-4c2b-b9b9-78ceb39bdf52",
                    "date": "17-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "d4030fb3-9407-48da-a472-3fea3174c8fd",
                    "date": "18-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "9be6b7a1-f31b-48de-a441-ec85e350fffb",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "ddf871d2-f460-45f8-b2fb-963dd7409339",
                    "date": "22-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                }
            ]
        },
        {
            "center_id": 8834,
            "name": "CGHS Disp. RK Puram Sec 12 PHC",
            "address": "Qr 810 818 825 Sector 12 R K Puram",
            "state_name": "Delhi",
            "district_name": "New Delhi",
            "block_name": "Not Applicable",
            "pincode": 110022,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "2794ad56-9c4c-4011-a343-1fb2ab269115",
                    "date": "17-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "f61b45cc-86a0-4085-b51f-337e7cf18eb7",
                    "date": "18-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "ba77f3fd-77fa-4581-a417-669583285837",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "e2a0da3f-3552-47d9-b570-1ef882ddc2b9",
                    "date": "22-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                }
            ]
        },
        {
            "center_id": 8798,
            "name": "ESI Maya Puri Phase II PHC",
            "address": "22 Facility Area Near Panjab Sindh Bank Mayapuri Phase 2",
            "state_name": "Delhi",
            "district_name": "New Delhi",
            "block_name": "Not Applicable",
            "pincode": 110059,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "e7e7b845-6265-4ff8-9aaa-b1f029d794fe",
                    "date": "17-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "ad795b00-8696-4897-bd89-57154ce121f2",
                    "date": "18-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "1669364f-41ea-422b-af4e-0622ca45c115",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "69534a3d-63fa-45b4-90af-a1e1c1ebaad9",
                    "date": "22-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                }
            ]
        },
        {
            "center_id": 667366,
            "name": "BSF Hospital R K Puram",
            "address": "FHQ BSF Hospital-I, East Block -9, Sector-1, R K Puram, New Delhi-110066",
            "state_name": "Delhi",
            "district_name": "New Delhi",
            "block_name": "Not Applicable",
            "pincode": 110066,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "461d7bea-8352-457b-a5c7-f4675897edcb",
                    "date": "17-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "6b6c4e62-e2a3-44d4-9636-5f4138e2a7be",
                    "date": "18-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "ae1c6e51-ccf6-41da-b8d0-41cae862f73d",
                    "date": "19-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "a070657f-7811-4a8b-8a9d-7f088f37fb38",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "5552f195-3ec0-4465-9aeb-36f108f60a32",
                    "date": "21-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "d4195381-efc3-4ed4-b49d-19df0dc92c05",
                    "date": "22-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                }
            ]
        },
        {
            "center_id": 8795,
            "name": "DGD Sagarpur PHC",
            "address": "DGD SAGARPUR",
            "state_name": "Delhi",
            "district_name": "New Delhi",
            "block_name": "Not Applicable",
            "pincode": 110046,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "cef4574d-fe5e-4512-97d7-ef9fa411c301",
                    "date": "17-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "c63e38bc-6df9-46d7-ab3a-45a6bd2d42ca",
                    "date": "18-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "22617f60-a11f-40c6-b206-3af3752f48d7",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "4ac09683-7ea7-4591-8538-0d63587f756c",
                    "date": "22-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                }
            ]
        },
        {
            "center_id": 8781,
            "name": "CGHS Dispensary North Avenue",
            "address": "31, North Avenue, New Delhi-1",
            "state_name": "Delhi",
            "district_name": "New Delhi",
            "block_name": "Not Applicable",
            "pincode": 110011,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "aa993871-f526-4521-99ac-06e40acc37b6",
                    "date": "17-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "3fa68e54-d683-4c65-84c2-af8eab2dc6ca",
                    "date": "18-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                }
            ]
        },
        {
            "center_id": 8792,
            "name": "DGD Motibagh PHC",
            "address": "Basti Vikas Kendra Shastri Market Moti-bagh New Delhi-110021",
            "state_name": "Delhi",
            "district_name": "New Delhi",
            "block_name": "Not Applicable",
            "pincode": 110021,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "577854e8-9a73-414a-9702-791c40475217",
                    "date": "17-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "c7acdfb8-9505-4a9c-8205-cd234344f48c",
                    "date": "18-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "2bade796-ab4a-47c7-888c-8dd98f0430e5",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "f389e455-48d8-4ef8-9cb3-267eb06a14ba",
                    "date": "22-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                }
            ]
        },
        {
            "center_id": 605450,
            "name": "Supreme Court Complex",
            "address": "Tilak Marg New Delhi-110001",
            "state_name": "Delhi",
            "district_name": "New Delhi",
            "block_name": "Not Applicable",
            "pincode": 110001,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "34a01cc1-8479-4eeb-9f3b-6271ea316107",
                    "date": "17-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "b1c982c5-54ed-4258-b46d-49b8d09f1b02",
                    "date": "18-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "85083f88-6f62-4c6e-a5f1-52b767813f8a",
                    "date": "19-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "b2427f63-0c53-4208-92bc-cc88483b27ef",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "5ba7f6fc-cf75-47bd-88c5-e7ba6267e027",
                    "date": "21-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "5d46ea77-9914-4296-b966-f5611b8b1d2f",
                    "date": "22-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                }
            ]
        },
        {
            "center_id": 8810,
            "name": "Charak Palika Hospial Site 1",
            "address": "Dist Hosp - Charak Palika Hospital",
            "state_name": "Delhi",
            "district_name": "New Delhi",
            "block_name": "Not Applicable",
            "pincode": 110021,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "4752efb2-bae2-4ff8-8fb3-84873683eed4",
                    "date": "17-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "09b4fe02-e9ff-451a-a3a7-320d6867101e",
                    "date": "18-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "7a92e4c7-b52d-4f1a-88a2-43df1330b624",
                    "date": "19-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "cc587d59-9287-4851-a54a-183dfbe1b80b",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "65a3313a-e417-4d5b-b4cc-a98f10b16c70",
                    "date": "21-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "a2071efc-da6a-40f2-92ca-79d2ce880b9a",
                    "date": "22-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                }
            ]
        },
        {
            "center_id": 8790,
            "name": "DGD Mahipalpur PHC",
            "address": "Mahipalpur, Near Hanuman Mandir, Delhi",
            "state_name": "Delhi",
            "district_name": "New Delhi",
            "block_name": "Not Applicable",
            "pincode": 110037,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "f93da879-1c17-4840-97ca-4db515f14fdc",
                    "date": "17-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "9161412a-b74d-4205-adb5-31c287eff129",
                    "date": "18-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "17514258-8526-4c0c-bfe9-ae6148c728c3",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "0f097f1e-b2cb-46e4-a786-3acc6d60781c",
                    "date": "22-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                }
            ]
        },
        {
            "center_id": 8821,
            "name": "Polyclinic Basant Goan PHC",
            "address": "Basant Goan Behind Research And Referral Army Hospital New Delhi-110057",
            "state_name": "Delhi",
            "district_name": "New Delhi",
            "block_name": "Not Applicable",
            "pincode": 110057,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "3a134172-e73b-4161-b4df-e8af731724bd",
                    "date": "17-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "e86f0d31-c457-47c3-b3c8-9ea1d1e1daad",
                    "date": "18-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "25829183-28de-4b34-8009-41d936404840",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "d2f7b82e-de27-4d03-8805-08fef98eafaf",
                    "date": "22-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                }
            ]
        },
        {
            "center_id": 8762,
            "name": "Base Hospital Delhi Cantt DH",
            "address": "Army Campus Delhi Cantt. New Delhi",
            "state_name": "Delhi",
            "district_name": "New Delhi",
            "block_name": "Not Applicable",
            "pincode": 110010,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "8b3a608e-2515-42d4-9550-14f8a3c71b11",
                    "date": "17-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "f66aafa8-af43-4ba4-8be8-fba55b5ae727",
                    "date": "18-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "dd89a450-7ffa-405a-aa49-dfbdbead5e68",
                    "date": "19-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "2d4405ad-5177-4881-a3aa-bfceb5cc6cca",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "c6059458-8a13-4c68-9bb6-7887ebecf4ec",
                    "date": "21-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "edbc6b67-74fd-4cb2-9f81-7315cbb20b10",
                    "date": "22-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                }
            ]
        },
        {
            "center_id": 576584,
            "name": "LHMC CVC 2",
            "address": "C- 604, Connaught Circus, Bangla Sahib Rd, DIZ Area, Connaught Place, New Delhi",
            "state_name": "Delhi",
            "district_name": "New Delhi",
            "block_name": "Central Delhi",
            "pincode": 110001,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "f0b0b354-a985-4efe-9c13-e3ef4380aff9",
                    "date": "17-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "7c513952-f36d-4635-8382-11419abf43a9",
                    "date": "18-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "f4c822ee-8866-44de-895a-efb7440b1286",
                    "date": "19-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "448c8084-3246-4977-9cfa-b093b7b0a596",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "4e332a15-81a4-470e-aa37-802016c15555",
                    "date": "21-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "094399c6-cc3c-4260-88cf-8da0440e3b1b",
                    "date": "22-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                }
            ]
        },
        {
            "center_id": 8775,
            "name": "CGHS Disp. Lodhi Road Aliganj",
            "address": "CGHS Building, Back Side Of Khanna Market Near Lodhi Road, New Delhi",
            "state_name": "Delhi",
            "district_name": "New Delhi",
            "block_name": "Not Applicable",
            "pincode": 110003,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "e02d4188-ee52-4560-a876-2b0aa4e3fa82",
                    "date": "17-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "5e87bfeb-b73e-4973-8cf9-97401899425d",
                    "date": "18-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "3638aa1c-86cc-4624-8ba2-0e34d8fc989d",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "be43d8be-301f-403f-8dd4-897243af87f3",
                    "date": "22-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                }
            ]
        },
        {
            "center_id": 638882,
            "name": "SMC Prahladpur (13 BRD)",
            "address": "AFS 13 BRD, Panchvati, Palam, Near Palam Railway Crossing",
            "state_name": "Delhi",
            "district_name": "New Delhi",
            "block_name": "Not Applicable",
            "pincode": 110010,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "42fc1efd-45dc-4d95-a3eb-3d35f8234569",
                    "date": "17-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "02018548-ae97-4c44-b58f-bc76043546b1",
                    "date": "18-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "8355ccf9-1335-488f-b3a1-6f1a57bc5928",
                    "date": "19-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "500ca829-bc55-4eb9-9019-de893eb64ab6",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "53a29737-1e02-46be-857a-c2fdf5e01a42",
                    "date": "21-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                }
            ]
        },
        {
            "center_id": 624682,
            "name": "Army Hospital R And R Hospital",
            "address": "Army Hospital R And R Delhi Cantonment",
            "state_name": "Delhi",
            "district_name": "New Delhi",
            "block_name": "Not Applicable",
            "pincode": 110010,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "212d1805-c030-4dac-a77f-7f13703b9172",
                    "date": "17-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "ee377d57-b49d-40eb-a451-859462d66a50",
                    "date": "18-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "fb7d2c38-570e-4400-aab4-d6d91b30f4fc",
                    "date": "19-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "d70340dd-d536-4e82-a932-62f8102602ac",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "85faa50d-8ec5-44a6-aba8-6c48890a22ab",
                    "date": "21-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "9c07546d-3942-4a6e-9558-33656177e7bb",
                    "date": "22-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                }
            ]
        },
        {
            "center_id": 608366,
            "name": "CGHS Moti Bagh",
            "address": "Opp.Begum Zaidi Market Moti Bagh",
            "state_name": "Delhi",
            "district_name": "New Delhi",
            "block_name": "Not Applicable",
            "pincode": 110021,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "353996d6-2244-469d-abbe-c6e91cddaef8",
                    "date": "17-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "108b5180-1d45-47cc-95c1-97df6720fedd",
                    "date": "18-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "1019ece1-36e5-4cf9-a2bb-2c7c7700e868",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "c6612bf8-b4ba-4b00-bf1c-b59a9eea4f9f",
                    "date": "22-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                }
            ]
        },
        {
            "center_id": 584471,
            "name": "RML Site 3",
            "address": "BKS Marg,CP,New Delhi",
            "state_name": "Delhi",
            "district_name": "New Delhi",
            "block_name": "Central Delhi",
            "pincode": 110001,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "091bbacf-964e-472b-a085-fc0deb7715b1",
                    "date": "17-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "1c7a5a42-0078-4d22-944b-3b20cdcbafd2",
                    "date": "18-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "4acfdde4-70da-46c0-8c96-fc4963d530f6",
                    "date": "19-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "43e1b296-03ed-4b0c-978f-3264a85dc84b",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "94d5552c-8249-4a62-8442-8dd02982d484",
                    "date": "21-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "5b6bd1ae-763d-4b5f-8769-95cec23492da",
                    "date": "22-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                }
            ]
        },
        {
            "center_id": 8816,
            "name": "MCW Sarojini Nagar NDMC PHC",
            "address": "CWC Complex, Bihand Of Post Office Near Police Thana Sarojini Nagar, New Delhi. 110023",
            "state_name": "Delhi",
            "district_name": "New Delhi",
            "block_name": "Not Applicable",
            "pincode": 110023,
            "lat": 0,
            "long": 0,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "8379aa41-383f-4721-9f7c-c3f8e2015db2",
                    "date": "17-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "550c905a-2126-460d-a1a9-86c364b5e1cd",
                    "date": "18-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "7dbec104-b232-4c56-88f1-290f5628ddd4",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "efde12fe-5333-4007-8e04-8990b8eda7ef",
                    "date": "22-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                }
            ]
        },
        {
            "center_id": 8765,
            "name": "CGHS Disp. RK Puram Sec 6 PHC",
            "address": "CGHS Disp. Building, R.K. Puram, Sector 6, New Delhi",
            "state_name": "Delhi",
            "district_name": "New Delhi",
            "block_name": "Not Applicable",
            "pincode": 110022,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "e4d31119-fc10-44cf-8c2e-bdbf3ccd11bb",
                    "date": "17-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "320c9c76-8e88-4106-8301-cc4e2b465291",
                    "date": "18-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "a4f82a97-7f76-4e5b-8136-db520198c8f4",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "21e3451c-dc30-4c63-998d-6aef5dcbef83",
                    "date": "22-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                }
            ]
        },
        {
            "center_id": 563206,
            "name": "RML Site 1",
            "address": "Baba Kharak Singh Marg",
            "state_name": "Delhi",
            "district_name": "New Delhi",
            "block_name": "Central Delhi",
            "pincode": 110001,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "b11f2199-f234-4a28-9ee6-9ca17841021e",
                    "date": "17-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "4ebedff7-0263-415c-9576-1bd5f700d767",
                    "date": "18-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "e8251372-c19b-4487-8b24-54d69ad9e57f",
                    "date": "19-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "b2691874-d1de-4851-bba9-418057dcaae6",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "b0b892a6-2dda-436a-9483-39dcaafc597c",
                    "date": "21-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "c512866c-1325-43be-91ba-106814a68c3e",
                    "date": "22-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                }
            ]
        },
        {
            "center_id": 698102,
            "name": "DGD High Court.",
            "address": "Sher Shah Road Near India Gate",
            "state_name": "Delhi",
            "district_name": "New Delhi",
            "block_name": "Not Applicable",
            "pincode": 110003,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "3ae26d00-47a9-44c0-bea8-46087df9a2f5",
                    "date": "17-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "e025ef5f-6674-4342-8c1a-df2451af4c06",
                    "date": "18-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "96624a9b-0ae4-4d5d-9cd6-3459fc2af1c9",
                    "date": "19-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "699f4e53-29b1-4716-803e-ed34c23d5f87",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "538dc9a9-bd02-4552-b305-faab756d99fe",
                    "date": "21-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "fb4c1ed1-9b81-48e2-ad9b-5d8763b7d7e1",
                    "date": "22-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                }
            ]
        },
        {
            "center_id": 576301,
            "name": "Delhi Cantt Gen Hosp. Site 2",
            "address": "Sadar Bajar Road Opp Police Station Kabul Line Delhi Cantonment 10",
            "state_name": "Delhi",
            "district_name": "New Delhi",
            "block_name": "Not Applicable",
            "pincode": 110010,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "55fdff19-d62b-492e-b378-c102484db703",
                    "date": "17-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "d54e5b2e-e303-480c-89dc-df82407ae10d",
                    "date": "18-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                }
            ]
        },
        {
            "center_id": 8759,
            "name": "Airforce Station Palam PHC",
            "address": "Maude Lines Delhi Cantt Contonment",
            "state_name": "Delhi",
            "district_name": "New Delhi",
            "block_name": "Not Applicable",
            "pincode": 110010,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "6caa62c7-01ea-4f6c-bdf6-07f63c5bfc2d",
                    "date": "17-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "5e777788-0b96-4d9d-9695-78604d578095",
                    "date": "18-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "d207d325-f648-4397-9287-ec96e9357bbc",
                    "date": "19-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "1b3b1000-45a2-4433-9213-40cc2df0fca3",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "a84eb023-1d99-43b8-99e2-51107dfbdc52",
                    "date": "21-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "506b14f0-d8c2-408d-b46c-53326556e25e",
                    "date": "22-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                }
            ]
        },
        {
            "center_id": 608316,
            "name": "MCW Golf Link",
            "address": "213, Golf Links, New Delhi",
            "state_name": "Delhi",
            "district_name": "New Delhi",
            "block_name": "Not Applicable",
            "pincode": 110003,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "5fadc745-8ca7-49ca-b287-c2bbfe47215f",
                    "date": "17-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "f509bb33-ae3b-4c8a-982e-23be3bb5c659",
                    "date": "18-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "75ad5c83-099b-48fc-840d-ef0a993f4d31",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "5b5c606a-e859-401e-9902-54c8d662f482",
                    "date": "22-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                }
            ]
        },
        {
            "center_id": 636309,
            "name": "DGD Patiala House Court",
            "address": "Tilak Marg New Delhi",
            "state_name": "Delhi",
            "district_name": "New Delhi",
            "block_name": "Not Applicable",
            "pincode": 110001,
            "lat": 0,
            "long": 0,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "54eb8db5-d3aa-4b6d-9999-a4f6efdb19f8",
                    "date": "17-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "5d1714fd-3696-4451-8f4f-e5ae8bdf206b",
                    "date": "18-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "196586fc-4f17-43cb-a9f0-0e7423052378",
                    "date": "19-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "f9a7c315-57e2-48e4-91b5-c2e370819697",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "1fe497f7-7873-44ef-83ce-f918a2c14364",
                    "date": "21-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "a1cc287f-44c1-44dd-87c4-80dfe20cf4dc",
                    "date": "22-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                }
            ]
        },
        {
            "center_id": 8773,
            "name": "CGHS Laxmibai Nagar PHC",
            "address": "CGHS Disp. Building, Near Navyug School, D-15 Near Ina Metro Laxmibai Nagar",
            "state_name": "Delhi",
            "district_name": "New Delhi",
            "block_name": "Not Applicable",
            "pincode": 110023,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "7c0a362a-e008-4c4a-b666-e5432f26749d",
                    "date": "17-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "03c7308b-3320-477b-b700-1b9c33efba14",
                    "date": "18-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "c27fee4f-91de-4190-909d-452a538b4870",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "92be3751-7b00-4796-982a-881caf842929",
                    "date": "22-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                }
            ]
        },
        {
            "center_id": 8811,
            "name": "MCW Babar Road NDMC PHC",
            "address": "42 Dispensary Complex 1st Floor Babar Road New Delhi 110001",
            "state_name": "Delhi",
            "district_name": "New Delhi",
            "block_name": "Not Applicable",
            "pincode": 110001,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "e6ed0825-c15d-451a-a1bc-7fc87a28e328",
                    "date": "17-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "3064d868-e7ea-446e-94e9-b20c8c302ab5",
                    "date": "18-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "b579465d-5b5f-41c5-8bcc-146e69797f3f",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "f1e6b6d4-4e4d-43f7-b6fb-0331cc48efba",
                    "date": "22-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                }
            ]
        },
        {
            "center_id": 624678,
            "name": "Armed Force Clinic",
            "address": "Dara Sikoh Road, Thyagraj Marg Area, Teen Murti Are",
            "state_name": "Delhi",
            "district_name": "New Delhi",
            "block_name": "Not Applicable",
            "pincode": 110011,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "3ae53433-cc20-4a6c-af3b-b99f39ecdd97",
                    "date": "17-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "11ceb251-cb2c-4a92-b214-5e5c42fff923",
                    "date": "18-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "ec077be8-df03-47b5-b881-d40e1b3d2bba",
                    "date": "19-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "4deb6722-3604-4fe8-aa2c-c30b0c69b58e",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "506f7a6b-6cd6-4895-87e7-e728c957705c",
                    "date": "21-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "94f34303-0f9a-4389-a64d-489189c0577d",
                    "date": "22-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                }
            ]
        },
        {
            "center_id": 613502,
            "name": "Parliament House",
            "address": "Sansad Marg,anpath, Connaught Place, New Delhi",
            "state_name": "Delhi",
            "district_name": "New Delhi",
            "block_name": "Not Applicable",
            "pincode": 110001,
            "lat": 0,
            "long": 0,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "9c1b02bd-a893-42ed-b7d0-0809c11e1131",
                    "date": "17-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "7704694b-23c1-4784-8e9e-8154b563bc6f",
                    "date": "18-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "9cd17687-34b1-403e-8ab3-cddcc1dec065",
                    "date": "19-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "f540c681-99c9-49d0-93b0-534f8e4c0a0c",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "f374765d-dd9b-4018-beec-e0c9a10b7ab2",
                    "date": "21-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "63df241b-b42c-4da7-8b94-aeb16314c336",
                    "date": "22-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                }
            ]
        },
        {
            "center_id": 563020,
            "name": "Delhi Cantt Gen Hosp. Site 1",
            "address": "Sadar Bajar Road Opp Police Station Kabul Line Delhi Cantonment 10",
            "state_name": "Delhi",
            "district_name": "New Delhi",
            "block_name": "Not Applicable",
            "pincode": 110010,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "1c024853-f562-4235-9c06-e7bdc7355571",
                    "date": "17-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "065b8ce1-5fa1-4032-ba2e-197d02bdfd7f",
                    "date": "18-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "eb858c5a-e1be-4da5-aa7a-9cae10660887",
                    "date": "19-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "f9bbe114-6a69-4ee9-bb0a-fa63014693e3",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "afd72d6d-aea2-4c14-ac32-53ac5d95a678",
                    "date": "21-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "d313df8f-d854-4d52-ab8f-465505812e52",
                    "date": "22-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                }
            ]
        },
        {
            "center_id": 8812,
            "name": "MCW Palika Health Complex",
            "address": "Palika Kendra Dispensary Ground Floor, Palika Kendra, Connaught Place",
            "state_name": "Delhi",
            "district_name": "New Delhi",
            "block_name": "Not Applicable",
            "pincode": 110021,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "5e97732a-9553-4cae-8f8f-fcc281391353",
                    "date": "17-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "c1c2eeff-7b35-49e3-bea5-4d5d74ed73e3",
                    "date": "18-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "3bf6fca7-d2fe-4310-9f99-88d64a37d1a6",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "8df221e9-f276-4c95-9463-71d93f73cc2c",
                    "date": "22-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                }
            ]
        },
        {
            "center_id": 692020,
            "name": "Parliament Library Building",
            "address": "Parliament House, Connaught Place",
            "state_name": "Delhi",
            "district_name": "New Delhi",
            "block_name": "Not Applicable",
            "pincode": 110002,
            "lat": 0,
            "long": 0,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "bbebd7fc-5331-495b-b422-a99894f0979c",
                    "date": "17-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "5b1ab640-f160-4c28-bf6f-bcbe8f96f3a1",
                    "date": "18-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "a80ee3c7-dfb3-444c-88b8-e2360ffd5db0",
                    "date": "19-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "e3cf5878-1949-49f7-a230-fb8f55ff74f7",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "f3eed381-5798-42a5-9780-ea116e0631b0",
                    "date": "21-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "73f85d67-54e5-4711-941a-e5fdd5283387",
                    "date": "22-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                }
            ]
        },
        {
            "center_id": 563193,
            "name": "LHMC CVC 1",
            "address": "C- 604, Connaught Circus, Bangla Sahib Rd, DIZ Area, Connaught Place, New Delhi",
            "state_name": "Delhi",
            "district_name": "New Delhi",
            "block_name": "Central Delhi",
            "pincode": 110001,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "f6e20dc5-a321-4b8c-a898-aba328b7fda2",
                    "date": "17-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "5af9f90f-1327-47c6-89b3-42c07e22fe45",
                    "date": "18-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "f392d195-483d-4466-a06b-ac7881436c70",
                    "date": "19-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "19a93503-0715-44b4-8425-51ac18ecf612",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "42058700-0c38-4f29-9d48-33922c514db7",
                    "date": "21-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-06:00PM"
                    ]
                },
                {
                    "session_id": "48056c1c-99b4-4cb9-b8a5-633489e3f7ee",
                    "date": "22-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                }
            ]
        },
        {
            "center_id": 8796,
            "name": "DGD Shahbad Mohammadpur PHC",
            "address": "Shahbad Mohammadpur Village, Delhi-61",
            "state_name": "Delhi",
            "district_name": "New Delhi",
            "block_name": "Not Applicable",
            "pincode": 110061,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "449a3fa9-d2c8-4da8-8be0-d0500d9fab2b",
                    "date": "17-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "e022041b-7b64-4feb-93ce-3d5c88981478",
                    "date": "18-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "d306214f-2a91-4c7e-acaf-db0038aee08b",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "13449485-bc01-4f8f-8548-bed74f02b25b",
                    "date": "22-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                }
            ]
        },
        {
            "center_id": 8791,
            "name": "DGD Mayapuri PHC",
            "address": "DGD, MAYAPURI REWARI RAILWAY LINE, MAYAPURI, DELHI",
            "state_name": "Delhi",
            "district_name": "New Delhi",
            "block_name": "Not Applicable",
            "pincode": 110064,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "fcbadbfc-4e84-4892-b373-5bef3d6b23dc",
                    "date": "17-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "cf50b885-a82c-42cd-a335-91767572f21c",
                    "date": "18-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "f6289200-bc3c-41e6-bf02-23d8cca303f4",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "1ee37e62-b7a4-4d42-bfe5-f261e2610062",
                    "date": "22-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                }
            ]
        },
        {
            "center_id": 8794,
            "name": "DGD Rajokari PHC",
            "address": "Rajokari Village Delhi-38",
            "state_name": "Delhi",
            "district_name": "New Delhi",
            "block_name": "Not Applicable",
            "pincode": 110038,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "40aea853-2e1b-4468-907d-99ea337c94f0",
                    "date": "17-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "c5d68442-b58b-4274-88f7-b3eafc976962",
                    "date": "18-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "b7d0bb14-90ac-455e-bc9d-ab183a086819",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "b531e3a4-6f11-439b-8de8-e27f0c2678ad",
                    "date": "22-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                }
            ]
        },
        {
            "center_id": 580925,
            "name": "RML Site 2",
            "address": "BKS Marg,CP,New Delhi",
            "state_name": "Delhi",
            "district_name": "New Delhi",
            "block_name": "Central Delhi",
            "pincode": 110001,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "b74fad5e-140b-4cec-a632-518f23150710",
                    "date": "17-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "bce8d8b3-a6f7-4f60-a903-afc61ee1b195",
                    "date": "18-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "961a6bf0-6f6a-4bcb-ba9d-e537f623effe",
                    "date": "19-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "667a410e-86a7-45a5-b223-32fcc112b3a4",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "b9e79cd2-3e3e-4689-bc54-1ba4c4ec800c",
                    "date": "21-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "93baa367-f24a-44cf-816b-effbb3cd9fa0",
                    "date": "22-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                }
            ]
        },
        {
            "center_id": 624686,
            "name": "Air Force Subroto Park",
            "address": "SUBROTO PARK, DHAULA KUAN",
            "state_name": "Delhi",
            "district_name": "New Delhi",
            "block_name": "Not Applicable",
            "pincode": 110010,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "7b9c0e17-27ba-4f5a-996b-3edb9f5d53c3",
                    "date": "17-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "90a6c7e1-e5dc-44e9-920b-8a3630e6c226",
                    "date": "18-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "73276403-1e09-4df0-9e56-72d34e6aa675",
                    "date": "19-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "98069377-db5d-4a34-9243-cece5066c73b",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "7793ad94-1021-47c4-b875-0ae0c7d90eb0",
                    "date": "22-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                }
            ]
        },
        {
            "center_id": 8797,
            "name": "ESI Factory Road PHC",
            "address": "ESI Factory Road Disp. Near Navyug School Sarojini Nagar",
            "state_name": "Delhi",
            "district_name": "New Delhi",
            "block_name": "Not Applicable",
            "pincode": 110023,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "e733a5d7-95a4-447f-8907-08df4e015e31",
                    "date": "17-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "857186fe-2edd-4fed-8346-366b0cc41003",
                    "date": "18-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "417e5fac-0b7a-4bae-b48b-33ff1bc00a04",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "e6be420f-3d73-4b4d-8d76-b586b993e0c8",
                    "date": "22-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                }
            ]
        },
        {
            "center_id": 624711,
            "name": "Naval Medical Center INS India",
            "address": "Dara Shukoh Road New Delhi",
            "state_name": "Delhi",
            "district_name": "New Delhi",
            "block_name": "Not Applicable",
            "pincode": 110011,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "44a380f4-8e8d-49c8-b22b-d298e6eaabc7",
                    "date": "17-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "9a402e07-8cf7-433a-80de-3f648cd1c035",
                    "date": "18-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "329d661d-ff02-48f6-afc8-e259b44eb536",
                    "date": "19-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "d6eca0e4-5a08-4e9e-b7cb-5f0ccc5555af",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "12579126-cc4e-4fd1-b537-228c9a54be69",
                    "date": "21-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "022bfd29-7f40-463a-9391-585c8b8d5b53",
                    "date": "22-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                }
            ]
        },
        {
            "center_id": 8825,
            "name": "SPUHC Samalka PHC",
            "address": "House No- 34 Telephone Extn. Road Samalka, Delhi-37",
            "state_name": "Delhi",
            "district_name": "New Delhi",
            "block_name": "Not Applicable",
            "pincode": 110037,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "f62bf7d4-763d-46ee-b7f8-2675fc735cb8",
                    "date": "17-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "70161045-9a9e-41a8-bf73-4084f777a961",
                    "date": "18-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "7de9f22c-fc55-440a-97db-7b5c0f148083",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "9a485bb8-e8fa-40a6-9a20-de094e26b3fc",
                    "date": "22-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                }
            ]
        },
        {
            "center_id": 608444,
            "name": "MCW Naraina",
            "address": "C-1, C-Block Community Center, Naraina Vihar, Naraina, New Delhi",
            "state_name": "Delhi",
            "district_name": "New Delhi",
            "block_name": "Not Applicable",
            "pincode": 110028,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "bc39e996-70ec-4a2e-a887-a225a4fb9933",
                    "date": "17-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "009178bb-2bb0-4a08-afe2-e94a251fbbc8",
                    "date": "18-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "60d3dc0e-2554-461f-9c4d-8add55a1124f",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "5c1234b6-5f86-410b-9c7e-2af6f0ffb901",
                    "date": "22-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                }
            ]
        },
        {
            "center_id": 8782,
            "name": "CGHS Disp. Pandara Road PHC",
            "address": "D-II 365-367, Pandara Road, New Delhi",
            "state_name": "Delhi",
            "district_name": "New Delhi",
            "block_name": "Not Applicable",
            "pincode": 110003,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "34aa7158-091d-4336-a3b0-3c7728a65d0f",
                    "date": "17-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "ddcffae3-df63-49d4-ab9c-6d15e92eabdf",
                    "date": "18-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "68badb61-0db0-491e-b747-cb8602ef83a1",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "8cc753f9-a847-4f07-badb-726f4bddf763",
                    "date": "22-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                }
            ]
        },
        {
            "center_id": 8799,
            "name": "ESI Mayapuri Phase I PHC",
            "address": "B 309 Near Police Station 1St Floor DDA Shopping Complex Near Mayapur Delhi 64",
            "state_name": "Delhi",
            "district_name": "New Delhi",
            "block_name": "Not Applicable",
            "pincode": 110064,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "5d6d44f9-345d-48d2-bf8d-2db22460a7b1",
                    "date": "17-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "7a4b430b-ce1a-4f8c-b6cf-b376bbd106d7",
                    "date": "18-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "bb8c0587-150e-4c50-a0a0-a26213ebd884",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "8f27b792-fb7c-408c-855b-dffe3aacb4e4",
                    "date": "22-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                }
            ]
        },
        {
            "center_id": 8789,
            "name": "DGD Inderpuri PHC",
            "address": "E-A-50, Inderpuri, New Delhi-110012",
            "state_name": "Delhi",
            "district_name": "New Delhi",
            "block_name": "Not Applicable",
            "pincode": 110012,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "460c7a3e-3aa0-4fa5-a560-21e2c9ff1f2e",
                    "date": "17-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "8952900d-5b9c-41e9-94e5-d81a932a4019",
                    "date": "18-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "644c6230-6ca8-43cd-9b27-5e5c4b7dff5e",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "10a52a12-c121-427c-9b47-b037ecd30c86",
                    "date": "22-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                }
            ]
        },
        {
            "center_id": 8806,
            "name": "MCW Rangpuri PHC",
            "address": "IPP-VIII Mahipalpur RANGPURI , MCD Boys School, Pagal Colony Rangpuri",
            "state_name": "Delhi",
            "district_name": "New Delhi",
            "block_name": "Not Applicable",
            "pincode": 110037,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "09c40484-bee5-4f18-884e-be6524d82ff8",
                    "date": "17-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "d5686c2b-2391-41e1-80a9-6e9b642877f5",
                    "date": "18-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "1968de49-46ae-4ee1-888b-cda675817a24",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "28362f7e-a76a-4ec9-b72f-3731770b9443",
                    "date": "22-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                }
            ]
        },
        {
            "center_id": 8788,
            "name": "DGD Budh Nagar PHC",
            "address": "JJ Colony, Budh Nagar. C Block ,delhi-110012",
            "state_name": "Delhi",
            "district_name": "New Delhi",
            "block_name": "Not Applicable",
            "pincode": 110012,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "d959ea4f-4abf-4747-a2ee-a240683e61c4",
                    "date": "17-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "9e95b932-65c8-40c3-b8f1-08cecd8b39da",
                    "date": "18-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "5118eefa-ae65-4d36-94c8-6ca2c55ef65b",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "db8ec213-6e07-4b74-a832-0cb681c5c23e",
                    "date": "22-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                }
            ]
        },
        {
            "center_id": 565416,
            "name": "Charak Palika Hospital Site 2",
            "address": "Charak Palika Hospital",
            "state_name": "Delhi",
            "district_name": "New Delhi",
            "block_name": "Not Applicable",
            "pincode": 110021,
            "lat": 28,
            "long": 77,
            "from": "09:00:00",
            "to": "17:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "773ef9ef-09de-47a2-843c-747626d2d31d",
                    "date": "17-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "eeadc888-9a2e-46fd-8b59-8ab3bb90d874",
                    "date": "18-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "789d7e44-d6b6-4dd3-8c2f-d60a48788dbd",
                    "date": "19-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "ccbd23ec-41cc-459b-ad85-3f0f4190a3f0",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "f13d3b23-aab5-4a01-bdf2-bd6fce885de2",
                    "date": "21-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                },
                {
                    "session_id": "06281823-3d03-4ceb-8308-d28fa7cd622b",
                    "date": "22-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-05:00PM"
                    ]
                }
            ]
        }
    ]
}
]
@Component({
  selector: 'app-vaccine-finder',
  templateUrl: './vaccine-finder.component.html',
  styleUrls: ['./vaccine-finder.component.css']
})
export class VaccineFinderComponent implements OnInit {

  constructor() { }
  
  tabLoadTimes: Date[] = [];
  showResult:any = "false";
  centers:any;
  noSlotsAvailable:any = "false";

  

  getTimeLoaded(index: number) {
    if (!this.tabLoadTimes[index]) {
      this.tabLoadTimes[index] = new Date();
    }
    return this.tabLoadTimes[index];
  }
  ngOnInit(): void {
  }
}
