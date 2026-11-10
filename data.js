var APP_DATA = {
  "scenes": [
    {
      "id": "0-queue-entrance",
      "name": "Queue Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.40200493305436247,
        "pitch": 0.012098614058347223,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -0.8227509311299883,
          "pitch": 0.20093626073465032,
          "rotation": 0,
          "target": "1-queue-p1"
        },
        {
          "yaw": -2.209439391482322,
          "pitch": -0.5336811322139479,
          "rotation": 0,
          "target": "78-maze-exit"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-queue-p1",
      "name": "Queue P1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.4293036712332192,
        "pitch": 0.0864186718453368,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -0.6247792709654938,
          "pitch": 0.16114706839092108,
          "rotation": 3.9269908169872414,
          "target": "2-queue-p2"
        },
        {
          "yaw": -1.6584188204682118,
          "pitch": 0.1838734076332802,
          "rotation": 0,
          "target": "3-queue-p3"
        },
        {
          "yaw": 2.9116023069232986,
          "pitch": 0.13769080068592032,
          "rotation": 3.141592653589793,
          "target": "0-queue-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-queue-p2",
      "name": "Queue P2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -2.2662060062287477,
        "pitch": 0.031643617230582066,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -2.61127244125713,
          "pitch": 0.14679912914862747,
          "rotation": 7.853981633974483,
          "target": "3-queue-p3"
        },
        {
          "yaw": 2.9472031813714406,
          "pitch": 0.13369500203804385,
          "rotation": 3.141592653589793,
          "target": "1-queue-p1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-queue-p3",
      "name": "Queue P3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.22590758639640285,
          "pitch": 0.21034932741426005,
          "rotation": 5.497787143782138,
          "target": "4-maze-entrance"
        },
        {
          "yaw": 1.2445800042547415,
          "pitch": 0.15535850179968236,
          "rotation": 3.141592653589793,
          "target": "2-queue-p2"
        },
        {
          "yaw": 2.8379464769287974,
          "pitch": 0.2209040611913693,
          "rotation": 4.71238898038469,
          "target": "1-queue-p1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-maze-entrance",
      "name": "Maze Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.05211172648134266,
        "pitch": 0.1935778249335538,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -1.825346342821799,
          "pitch": 0.17174912326256297,
          "rotation": 3.141592653589793,
          "target": "3-queue-p3"
        },
        {
          "yaw": -0.011955006614618569,
          "pitch": 0.43702920051632255,
          "rotation": 0.7853981633974483,
          "target": "5-pathway-1-p1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-pathway-1-p1",
      "name": "Pathway 1 P1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.0446671941268626,
        "pitch": 0.05876469685482455,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -0.06125379069623804,
          "pitch": 0.20342494300921032,
          "rotation": 0,
          "target": "6-pathway-1-p2"
        },
        {
          "yaw": 1.9894276094209005,
          "pitch": 0.29251861323403006,
          "rotation": 3.141592653589793,
          "target": "4-maze-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-pathway-1-p2",
      "name": "Pathway 1 P2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.13647930474658132,
        "pitch": 0.0864239491163854,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -0.1009647241532079,
          "pitch": 0.2509935564266179,
          "rotation": 7.0685834705770345,
          "target": "7-pathway-1-p3"
        },
        {
          "yaw": 3.063982513577674,
          "pitch": 0.2589695265694889,
          "rotation": 3.141592653589793,
          "target": "5-pathway-1-p1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-pathway-1-p3",
      "name": "Pathway 1 P3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -1.4950336067658068,
        "pitch": 0.13654150151562838,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -1.5607700941690545,
          "pitch": 0.37662311405383875,
          "rotation": 0.7853981633974483,
          "target": "8-pathway-1-p4"
        },
        {
          "yaw": 2.627490113504672,
          "pitch": 0.4714778814478713,
          "rotation": 2.356194490192345,
          "target": "6-pathway-1-p2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-pathway-1-p4",
      "name": "Pathway 1 P4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.07692683432960123,
        "pitch": 0.21258993273952065,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -0.08783931176999538,
          "pitch": 0.38725864857569725,
          "rotation": 4.71238898038469,
          "target": "9-pathway-1-p5"
        },
        {
          "yaw": 1.7451929788061484,
          "pitch": 0.37607188972679495,
          "rotation": 4.71238898038469,
          "target": "7-pathway-1-p3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-pathway-1-p5",
      "name": "Pathway 1 P5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.09677984083117686,
        "pitch": 0.32147745926464744,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -1.7495995404818903,
          "pitch": 0.21704856083066026,
          "rotation": 3.141592653589793,
          "target": "8-pathway-1-p4"
        },
        {
          "yaw": -0.06434028184199292,
          "pitch": 0.7863553985631917,
          "rotation": 7.853981633974483,
          "target": "10-pathway-1-p6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-pathway-1-p6",
      "name": "Pathway 1 P6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 1.5561285284531312,
        "pitch": 0.472160197991343,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 2.9573429014623906,
          "pitch": 0.7245105934076008,
          "rotation": 9.42477796076938,
          "target": "9-pathway-1-p5"
        },
        {
          "yaw": 1.459101073726199,
          "pitch": 0.5275058875235921,
          "rotation": 5.497787143782138,
          "target": "11-pathway-2-p1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-pathway-2-p1",
      "name": "Pathway 2 P1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.08064910050684482,
        "pitch": -0.006913493747624955,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 3.0456245224882164,
          "pitch": 0.04982510452102318,
          "rotation": 3.9269908169872414,
          "target": "10-pathway-1-p6"
        },
        {
          "yaw": 1.7539522894440411,
          "pitch": 0.2603382318806453,
          "rotation": 4.71238898038469,
          "target": "12-pathway-2-p2"
        },
        {
          "yaw": 0.14002257961802478,
          "pitch": 0.16549854023019783,
          "rotation": 0,
          "target": "15-pathway-2-p5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-pathway-2-p2",
      "name": "Pathway 2 P2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.06353238613764489,
          "pitch": 0.35679250237058646,
          "rotation": 6.283185307179586,
          "target": "13-pathway-2-p3"
        },
        {
          "yaw": -1.74362032289228,
          "pitch": 0.18695879487600742,
          "rotation": 7.853981633974483,
          "target": "11-pathway-2-p1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-pathway-2-p3",
      "name": "Pathway 2 P3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 1.5287231863499828,
        "pitch": 0.1492686150055924,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 1.4274575360644022,
          "pitch": 0.1466582184052143,
          "rotation": 4.71238898038469,
          "target": "14-pathway-2-p4"
        },
        {
          "yaw": -1.389790500945466,
          "pitch": 0.36253440249725877,
          "rotation": 3.141592653589793,
          "target": "12-pathway-2-p2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-pathway-2-p4",
      "name": "Pathway 2 P4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 1.8830608642828865,
        "pitch": 0.1611487525019637,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 1.9606948958464114,
          "pitch": 0.2432800607566108,
          "rotation": 1.5707963267948966,
          "target": "15-pathway-2-p5"
        },
        {
          "yaw": -0.443219411961957,
          "pitch": 0.32754137135165706,
          "rotation": 3.9269908169872414,
          "target": "13-pathway-2-p3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-pathway-2-p5",
      "name": "Pathway 2 P5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0.06222144372863703,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 1.712583588416659,
          "pitch": 0.23678716085622042,
          "rotation": 3.141592653589793,
          "target": "14-pathway-2-p4"
        },
        {
          "yaw": 3.1288936751588654,
          "pitch": 0.19835296687737625,
          "rotation": 3.141592653589793,
          "target": "11-pathway-2-p1"
        },
        {
          "yaw": -0.04780606276071708,
          "pitch": 0.24459197952714007,
          "rotation": 0,
          "target": "16-pathway-2-p6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-pathway-2-p6",
      "name": "Pathway 2 P6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.09926043139303076,
        "pitch": 0.17629409056448608,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 2.858219150364013,
          "pitch": 0.25337492403785156,
          "rotation": 3.141592653589793,
          "target": "15-pathway-2-p5"
        },
        {
          "yaw": -0.15732549195012346,
          "pitch": 0.35242644137698953,
          "rotation": 4.71238898038469,
          "target": "17-pathway-2-p7"
        },
        {
          "yaw": -1.7331190172842366,
          "pitch": 0.19658210290486444,
          "rotation": 4.71238898038469,
          "target": "23-pathway-2-p13"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-pathway-2-p7",
      "name": "Pathway 2 P7",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.009926043139307339,
        "pitch": 0.21086155930261796,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -1.5571375738083173,
          "pitch": 0.3191624790240155,
          "rotation": 3.141592653589793,
          "target": "16-pathway-2-p6"
        },
        {
          "yaw": 0.11388406711933285,
          "pitch": 0.5339830353755044,
          "rotation": 1.5707963267948966,
          "target": "18-pathway-2-p8"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-pathway-2-p8",
      "name": "Pathway 2 P8",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.05955625883582272,
        "pitch": 0.10197403277749473,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 1.6003905699651,
          "pitch": 0.5743777566221233,
          "rotation": 3.141592653589793,
          "target": "17-pathway-2-p7"
        },
        {
          "yaw": -0.025803761054017826,
          "pitch": 0.3179587987999142,
          "rotation": 4.71238898038469,
          "target": "19-pathway-2-p9"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-pathway-2-p9",
      "name": "Pathway 2 P9",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.042185683342037095,
        "pitch": 0.21777505305025002,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -1.6271500207832759,
          "pitch": 0.35473040447932647,
          "rotation": 3.141592653589793,
          "target": "18-pathway-2-p8"
        },
        {
          "yaw": -0.0796527472256674,
          "pitch": 0.42582061108253555,
          "rotation": 0,
          "target": "20-pathway-2-p10"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-pathway-2-p10",
      "name": "Pathway 2 P10",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -2.863157529923967,
        "pitch": 0.2070826506172807,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -2.8385232962096403,
          "pitch": 0.5018250281239283,
          "rotation": 4.71238898038469,
          "target": "21-pathway-2-p11"
        },
        {
          "yaw": 0.18204805325460782,
          "pitch": 0.47397520008734517,
          "rotation": 3.141592653589793,
          "target": "19-pathway-2-p9"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-pathway-2-p11",
      "name": "Pathway 2 P11",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.2787389099918549,
        "pitch": 0.2696675430130817,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 0.4661648968381904,
          "pitch": 0.398968855785931,
          "rotation": 0.7853981633974483,
          "target": "22-pathway-2-p12"
        },
        {
          "yaw": -1.6041779869240287,
          "pitch": 0.38272070524816115,
          "rotation": 3.9269908169872414,
          "target": "20-pathway-2-p10"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-pathway-2-p12",
      "name": "Pathway 2 P12",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.21837294906468685,
        "pitch": 0.29723315253958305,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -2.4769640481219675,
          "pitch": 0.3131535905977465,
          "rotation": 2.356194490192345,
          "target": "21-pathway-2-p11"
        },
        {
          "yaw": 0.20413527722034708,
          "pitch": 0.5995545070177357,
          "rotation": 5.497787143782138,
          "target": "23-pathway-2-p13"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-pathway-2-p13",
      "name": "Pathway 2 P13",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 1.6303525856307086,
        "pitch": 0.29900860458485923,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 0.17547289109027986,
          "pitch": 0.2530307514746877,
          "rotation": 4.71238898038469,
          "target": "16-pathway-2-p6"
        },
        {
          "yaw": -2.5526530646112455,
          "pitch": 0.4763798630209237,
          "rotation": 3.9269908169872414,
          "target": "22-pathway-2-p12"
        },
        {
          "yaw": 1.6171612342562733,
          "pitch": 0.25118765732546144,
          "rotation": 4.71238898038469,
          "target": "24-pathway-2-p14"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-pathway-2-p14",
      "name": "Pathway 2 P14",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.19976161817849025,
        "pitch": -0.09851728590367337,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -1.8235724017372696,
          "pitch": 0.19392491607167983,
          "rotation": 3.141592653589793,
          "target": "23-pathway-2-p13"
        },
        {
          "yaw": -0.19614486861625302,
          "pitch": -0.2858683149485337,
          "rotation": 4.71238898038469,
          "target": "25-queue-2-p1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-queue-2-p1",
      "name": "Queue 2 P1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.08188985589925935,
        "pitch": 0.203948065554993,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -2.454456337973351,
          "pitch": 0.1703703178982856,
          "rotation": 3.141592653589793,
          "target": "24-pathway-2-p14"
        },
        {
          "yaw": 0.17530002547842471,
          "pitch": 0.3066287883715031,
          "rotation": 5.497787143782138,
          "target": "26-queue-2-p3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-queue-2-p3",
      "name": "Queue 2 P3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.2605586324067293,
        "pitch": -0.0034567468738142537,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -2.5322580556351184,
          "pitch": 0.2899165340357861,
          "rotation": 3.9269908169872414,
          "target": "25-queue-2-p1"
        },
        {
          "yaw": -0.8302203026376898,
          "pitch": 0.3242160375026373,
          "rotation": 3.9269908169872414,
          "target": "28-queue-2-p5"
        },
        {
          "yaw": 0.21027344961482974,
          "pitch": 0.018060931518373735,
          "rotation": 3.9269908169872414,
          "target": "27-queue-2-p4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-queue-2-p4",
      "name": "Queue 2 P4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.10298287234920878,
        "pitch": 0.08296192497152077,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -0.10309247165753099,
          "pitch": 0.22761296517998453,
          "rotation": 5.497787143782138,
          "target": "28-queue-2-p5"
        },
        {
          "yaw": -0.773372473995785,
          "pitch": 0.1338693329960634,
          "rotation": 3.141592653589793,
          "target": "26-queue-2-p3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-queue-2-p5",
      "name": "Queue 2 P5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -1.0939174119752408,
        "pitch": 0.14511464385573092,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -1.2090182822127122,
          "pitch": 0.3389936945080336,
          "rotation": 0.7853981633974483,
          "target": "29-queue-2-p6"
        },
        {
          "yaw": 3.047338111230509,
          "pitch": 0.08679774120196093,
          "rotation": 3.141592653589793,
          "target": "27-queue-2-p4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-queue-2-p6",
      "name": "Queue 2 P6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.09925829496082983,
        "pitch": 0.14691471818916213,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 1.5855756433597348,
          "pitch": 0.2813898581292342,
          "rotation": 5.497787143782138,
          "target": "26-queue-2-p3"
        },
        {
          "yaw": -0.12750685612814472,
          "pitch": 0.4453830310210378,
          "rotation": 0,
          "target": "30-queue-2-p7"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-queue-2-p7",
      "name": "Queue 2 P7",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.10422345296268887,
        "pitch": 0.0017283734369062387,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 3.004885358016381,
          "pitch": 0.26393808731572577,
          "rotation": 3.141592653589793,
          "target": "29-queue-2-p6"
        },
        {
          "yaw": -0.12678142912452373,
          "pitch": -0.304303564653992,
          "rotation": 4.71238898038469,
          "target": "31-pathway-3-p1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "31-pathway-3-p1",
      "name": "Pathway 3 P1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.06824154658271375,
        "pitch": 0.3180207123908314,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -1.5159656556295822,
          "pitch": 0.5956518207312005,
          "rotation": 3.141592653589793,
          "target": "30-queue-2-p7"
        },
        {
          "yaw": -0.2155942226429044,
          "pitch": 0.6469338611049,
          "rotation": 5.497787143782138,
          "target": "32-pathway-3-p2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "32-pathway-3-p2",
      "name": "Pathway 3 P2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.012407435436045944,
        "pitch": 0.307650471769394,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -0.566831123290406,
          "pitch": 0.24062624875971217,
          "rotation": 16.493361431346422,
          "target": "33-pathway-3-p3"
        },
        {
          "yaw": -2.616702657144881,
          "pitch": 0.19899141484857452,
          "rotation": 3.9269908169872414,
          "target": "31-pathway-3-p1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "33-pathway-3-p3",
      "name": "Pathway 3 P3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.285898830801269,
          "pitch": 0.6480552327782263,
          "rotation": 3.9269908169872414,
          "target": "32-pathway-3-p2"
        },
        {
          "yaw": -0.11843879193043705,
          "pitch": -0.2654569917395122,
          "rotation": 4.71238898038469,
          "target": "34-pathway-4-p1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "34-pathway-4-p1",
      "name": "Pathway 4 P1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.11663100688681638,
        "pitch": 0.30073697802176724,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -0.14613045097438615,
          "pitch": 0.559309991970979,
          "rotation": 0.7853981633974483,
          "target": "35-pathway-4-p2"
        },
        {
          "yaw": -2.6108788867037696,
          "pitch": 0.7902076474384145,
          "rotation": 3.9269908169872414,
          "target": "33-pathway-3-p3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "35-pathway-4-p2",
      "name": "Pathway 4 P2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.3064688903587651,
        "pitch": 0.20049131868117165,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 0.3942905655464948,
          "pitch": 0.40009289997627207,
          "rotation": 1.5707963267948966,
          "target": "36-platform-p1"
        },
        {
          "yaw": 1.8369804870846336,
          "pitch": 0.503077539063348,
          "rotation": 3.9269908169872414,
          "target": "34-pathway-4-p1"
        },
        {
          "yaw": -1.890542213795726,
          "pitch": 0.13279376230476103,
          "rotation": 0.7853981633974483,
          "target": "72-pathway-8-p7"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "36-platform-p1",
      "name": "Platform P1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.05831550344339931,
        "pitch": 0.21431830617641978,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -0.040529138257706876,
          "pitch": 0.3755653504029759,
          "rotation": 13.351768777756625,
          "target": "37-platform-p2"
        },
        {
          "yaw": 1.5944278938976115,
          "pitch": 0.5447292513597546,
          "rotation": 2.356194490192345,
          "target": "35-pathway-4-p2"
        },
        {
          "yaw": -0.23214375540429444,
          "pitch": 0.3393173555140585,
          "rotation": 0.7853981633974483,
          "target": "38-platform-p3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "37-platform-p2",
      "name": "Platform P2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.0645214250685413,
        "pitch": 0.29207072146290436,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -1.2656238071047952,
          "pitch": 0.8219929046872103,
          "rotation": 13.351768777756625,
          "target": "38-platform-p3"
        },
        {
          "yaw": 3.0885208012361147,
          "pitch": 0.40338203579073095,
          "rotation": 3.141592653589793,
          "target": "36-platform-p1"
        },
        {
          "yaw": -0.05825201931275714,
          "pitch": 0.43393051819895945,
          "rotation": 0.7853981633974483,
          "target": "39-platform-p5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "38-platform-p3",
      "name": "Platform P3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.3995232363569805,
        "pitch": 0.18320374992971367,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 0.4908010210141729,
          "pitch": 0.3875430435699023,
          "rotation": 0.7853981633974483,
          "target": "39-platform-p5"
        },
        {
          "yaw": 2.5951148607436876,
          "pitch": 0.394633696863286,
          "rotation": 3.9269908169872414,
          "target": "36-platform-p1"
        },
        {
          "yaw": 1.6903180572291312,
          "pitch": 0.9100035476011445,
          "rotation": 4.71238898038469,
          "target": "37-platform-p2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "39-platform-p5",
      "name": "Platform P5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 1.414201337130418,
        "pitch": 0.25606518558262437,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -2.357963738148145,
          "pitch": 0.3991262757730567,
          "rotation": 2.356194490192345,
          "target": "38-platform-p3"
        },
        {
          "yaw": 1.495242116947873,
          "pitch": 0.48515224295861614,
          "rotation": 11.780972450961727,
          "target": "40-pathway-5-p1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "40-pathway-5-p1",
      "name": "Pathway 5 P1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.11042722992475973,
        "pitch": 0.2696262561574514,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -1.9343496405587892,
          "pitch": 0.42235139734939153,
          "rotation": 3.141592653589793,
          "target": "39-platform-p5"
        },
        {
          "yaw": -0.1755741236077295,
          "pitch": 0.5810860461490481,
          "rotation": 5.497787143782138,
          "target": "41-pathway-5-p2"
        },
        {
          "yaw": 2.8137425270109944,
          "pitch": 0.14223323015961142,
          "rotation": 2.356194490192345,
          "target": "70-pathway-8-p5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "41-pathway-5-p2",
      "name": "Pathway 5 P2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.8908902901102174,
        "pitch": 0.2938234842741281,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -2.7001022476208405,
          "pitch": 0.6044684026935414,
          "rotation": 3.9269908169872414,
          "target": "40-pathway-5-p1"
        },
        {
          "yaw": 0.8678215941728205,
          "pitch": 0.48610553523128885,
          "rotation": 1.5707963267948966,
          "target": "42-pathway-5-p3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "42-pathway-5-p3",
      "name": "Pathway 5 P3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.6076408584583,
        "pitch": 0.2570192969705971,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 0.6394372595282736,
          "pitch": 0.5372248981110879,
          "rotation": 5.497787143782138,
          "target": "43-pathway-5-p4"
        },
        {
          "yaw": 2.3859413534002094,
          "pitch": 0.4788969408952859,
          "rotation": 3.141592653589793,
          "target": "41-pathway-5-p2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "43-pathway-5-p4",
      "name": "Pathway 5 P4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.7720870946608915,
        "pitch": 0.2944482630709988,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -0.7833751668317745,
          "pitch": 0.42058641093109017,
          "rotation": 7.853981633974483,
          "target": "44-pathway-5-p6"
        },
        {
          "yaw": -2.032384708367511,
          "pitch": 0.4975058628480973,
          "rotation": 3.141592653589793,
          "target": "42-pathway-5-p3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "44-pathway-5-p6",
      "name": "Pathway 5 P6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.6990077558363907,
        "pitch": 0.2149930880066897,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 0.7781926396369148,
          "pitch": 0.5856213747442656,
          "rotation": 0,
          "target": "45-pathway-5-p7"
        },
        {
          "yaw": 2.48593483169838,
          "pitch": 0.4430097259663661,
          "rotation": 3.141592653589793,
          "target": "43-pathway-5-p4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "45-pathway-5-p7",
      "name": "Pathway 5 P7",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.41196103903271464,
        "pitch": 0.153825235884689,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 0.3600846043612176,
          "pitch": 0.4063701584758945,
          "rotation": 0,
          "target": "46-pathway-5-p8"
        },
        {
          "yaw": -2.3547554615557953,
          "pitch": 0.5994135962158023,
          "rotation": 3.141592653589793,
          "target": "44-pathway-5-p6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "46-pathway-5-p8",
      "name": "Pathway 5 P8",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.8711230962163192,
        "pitch": 0.2740372237913533,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 0.7952074051314462,
          "pitch": 0.6452717230495875,
          "rotation": 2.356194490192345,
          "target": "47-pathway-5-p9"
        },
        {
          "yaw": -3.0433820588385103,
          "pitch": 0.47224682811738816,
          "rotation": 3.141592653589793,
          "target": "45-pathway-5-p7"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "47-pathway-5-p9",
      "name": "Pathway 5 P9",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.33625195935381846,
        "pitch": 0.16419547650611754,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 1.2935340309051142,
          "pitch": 0.734873201415942,
          "rotation": 2.356194490192345,
          "target": "46-pathway-5-p8"
        },
        {
          "yaw": 0.2895097810643108,
          "pitch": 0.35304579936168423,
          "rotation": 4.71238898038469,
          "target": "48-pathway-5-p10"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "48-pathway-5-p10",
      "name": "Pathway 5 P10",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.07143112041642752,
        "pitch": 0.3685146697898247,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -0.06097823117338841,
          "pitch": 0.4722890805441793,
          "rotation": 5.497787143782138,
          "target": "49-pathway-6-p1"
        },
        {
          "yaw": -0.7725697979734765,
          "pitch": 0.29319049147725806,
          "rotation": 3.141592653589793,
          "target": "47-pathway-5-p9"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "49-pathway-6-p1",
      "name": "Pathway 6 P1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.14392762551991112,
        "pitch": 0.1469117421370676,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -2.417747585077649,
          "pitch": 0.5443801094001124,
          "rotation": 3.141592653589793,
          "target": "48-pathway-5-p10"
        },
        {
          "yaw": -0.18042476346648506,
          "pitch": 0.3190122652256999,
          "rotation": 0,
          "target": "50-pathway-6-p2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "50-pathway-6-p2",
      "name": "Pathway 6 P2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.17207204653333186,
        "pitch": 0.22814877005758127,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -3.1038201383317254,
          "pitch": 0.4503855905791241,
          "rotation": 3.141592653589793,
          "target": "49-pathway-6-p1"
        },
        {
          "yaw": -0.2574994002592934,
          "pitch": 0.4557040224516733,
          "rotation": 7.0685834705770345,
          "target": "51-pathway-6-p3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "51-pathway-6-p3",
      "name": "Pathway 6 P3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.4528792032606841,
        "pitch": 0.3059220983325037,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 0.8175613735046134,
          "pitch": 0.7440729418475023,
          "rotation": 3.9269908169872414,
          "target": "50-pathway-6-p2"
        },
        {
          "yaw": -0.5292241739476609,
          "pitch": 0.5318255720459533,
          "rotation": 0.7853981633974483,
          "target": "52-pathway-6-p4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "52-pathway-6-p4",
      "name": "Pathway 6 P4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.08933438825373585,
        "pitch": 0.37332866237185236,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -2.792408660642982,
          "pitch": 0.5656222409856433,
          "rotation": 2.356194490192345,
          "target": "51-pathway-6-p3"
        },
        {
          "yaw": -0.013980278386084066,
          "pitch": 0.757732928984721,
          "rotation": 7.0685834705770345,
          "target": "53-pathway-6-p5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "53-pathway-6-p5",
      "name": "Pathway 6 P5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.83021714022032,
        "pitch": 0.26347127146211413,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -0.8425133762460888,
          "pitch": 0.49448632028091666,
          "rotation": 1.5707963267948966,
          "target": "54-pathway-6-p6"
        },
        {
          "yaw": 1.7391581341176678,
          "pitch": 0.6956364060003892,
          "rotation": 3.141592653589793,
          "target": "52-pathway-6-p4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "54-pathway-6-p6",
      "name": "Pathway 6 P6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.014876302374561945,
        "pitch": 0.28691887949847583,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 2.019861908311851,
          "pitch": 0.5873938740517186,
          "rotation": 2.356194490192345,
          "target": "53-pathway-6-p5"
        },
        {
          "yaw": 0.012510809859794136,
          "pitch": 0.45390264325655316,
          "rotation": 5.497787143782138,
          "target": "55-pathway-6-p7"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "55-pathway-6-p7",
      "name": "Pathway 6 P7",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.017038346055581854,
        "pitch": 0.24535587209508947,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -2.854970504746923,
          "pitch": 0.3883395965083878,
          "rotation": 3.141592653589793,
          "target": "54-pathway-6-p6"
        },
        {
          "yaw": 0.06837684928529697,
          "pitch": 0.5107754621965643,
          "rotation": 10.995574287564278,
          "target": "56-pathway-6-p8"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "56-pathway-6-p8",
      "name": "Pathway 6 P8",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.062039864409538126,
        "pitch": 0.3162923389539323,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 0.13584879772166403,
          "pitch": 0.7525713909772129,
          "rotation": 4.71238898038469,
          "target": "57-pathway-7-p1"
        },
        {
          "yaw": -1.61874430441393,
          "pitch": 0.32023568787294643,
          "rotation": 3.141592653589793,
          "target": "55-pathway-6-p7"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "57-pathway-7-p1",
      "name": "Pathway 7 P1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.19108627058687944,
        "pitch": 0.2385155342931231,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -2.551462759054928,
          "pitch": 0.6457151539277568,
          "rotation": 3.9269908169872414,
          "target": "56-pathway-6-p8"
        },
        {
          "yaw": 0.19765536195373556,
          "pitch": 0.45387787644741806,
          "rotation": 2.356194490192345,
          "target": "58-pathway-7-p2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "58-pathway-7-p2",
      "name": "Pathway 7 P2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.22705937484892758,
        "pitch": 0.2333304139824044,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 0.9655542857567188,
          "pitch": 0.5278045052855429,
          "rotation": 3.141592653589793,
          "target": "57-pathway-7-p1"
        },
        {
          "yaw": 0.0735748056593124,
          "pitch": 0.16018202981265617,
          "rotation": 13.351768777756625,
          "target": "59-pathway-7-p3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "59-pathway-7-p3",
      "name": "Pathway 7 P3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.38589036007697786,
        "pitch": 0.28863836396342357,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 1.0973633564983594,
          "pitch": 0.6605556018995475,
          "rotation": 3.9269908169872414,
          "target": "58-pathway-7-p2"
        },
        {
          "yaw": -0.3055011835204695,
          "pitch": 0.2550244875030252,
          "rotation": 12.566370614359176,
          "target": "60-pathway-7-p4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "60-pathway-7-p4",
      "name": "Pathway 7 P4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -1.7792404330915836,
        "pitch": 0.24888967480001156,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 1.719486476184171,
          "pitch": 0.11527516700742879,
          "rotation": 3.141592653589793,
          "target": "59-pathway-7-p3"
        },
        {
          "yaw": -1.8443469272306743,
          "pitch": 0.2217619981526866,
          "rotation": 5.497787143782138,
          "target": "61-pathway-7-p5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "61-pathway-7-p5",
      "name": "Pathway 7 P5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.2704846755460366,
        "pitch": 0.2592560155360051,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 0.267295244869592,
          "pitch": 0.563217511699742,
          "rotation": 0.7853981633974483,
          "target": "62-pathway-7-p6"
        },
        {
          "yaw": 3.1378856439699936,
          "pitch": 0.14174415958877518,
          "rotation": 10.210176124166829,
          "target": "60-pathway-7-p4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "62-pathway-7-p6",
      "name": "Pathway 7 P6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.15029769445808583,
        "pitch": 0.26714951844220636,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 1.6085304325474041,
          "pitch": 0.4700519862689312,
          "rotation": 2.356194490192345,
          "target": "61-pathway-7-p5"
        },
        {
          "yaw": -0.13530235285226766,
          "pitch": 0.4830686077859525,
          "rotation": 0.7853981633974483,
          "target": "63-pathway-7-p7"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "63-pathway-7-p7",
      "name": "Pathway 7 P7",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.34741150987564673,
        "pitch": 0.32319574212191426,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 0.84906163665873,
          "pitch": 0.27909397930054425,
          "rotation": 1.5707963267948966,
          "target": "65-pathway-7-p9"
        },
        {
          "yaw": -0.3907492470933587,
          "pitch": 0.663373052451508,
          "rotation": 0.7853981633974483,
          "target": "64-pathway-7-p8"
        },
        {
          "yaw": 2.0934901396316175,
          "pitch": 0.47502956156549025,
          "rotation": 2.356194490192345,
          "target": "62-pathway-7-p6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "64-pathway-7-p8",
      "name": "Pathway 7 P8",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.7678727174678102,
        "pitch": 0.25032459356273407,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 2.5390738844693415,
          "pitch": 0.6252611831544321,
          "rotation": 2.356194490192345,
          "target": "63-pathway-7-p7"
        },
        {
          "yaw": -0.7494150189115238,
          "pitch": 0.5167266449777301,
          "rotation": 3.9269908169872414,
          "target": "66-pathway-8-p1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "65-pathway-7-p9",
      "name": "Pathway 7 P9",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.056241055368899,
          "pitch": 0.23683010506604774,
          "rotation": 1.5707963267948966,
          "target": "63-pathway-7-p7"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "66-pathway-8-p1",
      "name": "Pathway 8 P1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.08437493604029456,
        "pitch": 0.2557992686621926,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -1.620128161526976,
          "pitch": 0.7463770586359981,
          "rotation": 3.9269908169872414,
          "target": "64-pathway-7-p8"
        },
        {
          "yaw": -0.06849651924297007,
          "pitch": 0.49913895686368015,
          "rotation": 4.71238898038469,
          "target": "67-pathway-8-p2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "67-pathway-8-p2",
      "name": "Pathway 8 P2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.004961931044240586,
        "pitch": 0.24370065460383472,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -1.6000153713265775,
          "pitch": 0.4098064369740335,
          "rotation": 3.141592653589793,
          "target": "66-pathway-8-p1"
        },
        {
          "yaw": -0.05320578060929826,
          "pitch": 0.5488281515615299,
          "rotation": 1.5707963267948966,
          "target": "68-pathway-8-p3"
        },
        {
          "yaw": 0.9111919207621444,
          "pitch": 0.04974940136951567,
          "rotation": 2.356194490192345,
          "target": "70-pathway-8-p5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "68-pathway-8-p3",
      "name": "Pathway 8 P3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.031204517334078474,
        "pitch": 0.25260110806981295,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 1.87712896341284,
          "pitch": 0.5297466379806117,
          "rotation": 3.141592653589793,
          "target": "67-pathway-8-p2"
        },
        {
          "yaw": 0.04004371949940477,
          "pitch": 0.4360960351440557,
          "rotation": 0,
          "target": "69-pathway-8-p4"
        },
        {
          "yaw": 0.47731095821948344,
          "pitch": 0.1765140243186316,
          "rotation": 1.5707963267948966,
          "target": "70-pathway-8-p5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "69-pathway-8-p4",
      "name": "Pathway 8 P4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.012407553924127512,
        "pitch": 0.2938234842741405,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 3.129526649854336,
          "pitch": 0.4910028784843714,
          "rotation": 3.141592653589793,
          "target": "68-pathway-8-p3"
        },
        {
          "yaw": 2.7627921587527684,
          "pitch": 0.18680160696954928,
          "rotation": 5.497787143782138,
          "target": "70-pathway-8-p5"
        },
        {
          "yaw": -0.028278524410016104,
          "pitch": 0.448827606933186,
          "rotation": 0,
          "target": "71-pathway-8-p6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "70-pathway-8-p5",
      "name": "Pathway 8 P5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.017370575493783846,
        "pitch": 0.2775354622297588,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -2.9873249082965465,
          "pitch": 0.0519211472955341,
          "rotation": 1.5707963267948966,
          "target": "69-pathway-8-p4"
        },
        {
          "yaw": 0.03399278241789894,
          "pitch": 0.1833887828025027,
          "rotation": 1.5707963267948966,
          "target": "40-pathway-5-p1"
        },
        {
          "yaw": 1.5168574779782373,
          "pitch": 0.10324011961417412,
          "rotation": 1.5707963267948966,
          "target": "67-pathway-8-p2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "71-pathway-8-p6",
      "name": "Pathway 8 P6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.21092841671019968,
        "pitch": 0.2471574014776614,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -0.28138341483646556,
          "pitch": 0.44972885478400926,
          "rotation": 5.497787143782138,
          "target": "72-pathway-8-p7"
        },
        {
          "yaw": 3.0342762115773834,
          "pitch": 0.36088879049363953,
          "rotation": 3.141592653589793,
          "target": "69-pathway-8-p4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "72-pathway-8-p7",
      "name": "Pathway 8 P7",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -1.1118656887762448,
        "pitch": 0.24860100166484322,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -1.1689917708335678,
          "pitch": 0.4203519100710338,
          "rotation": 0,
          "target": "73-pathway-8-p8"
        },
        {
          "yaw": 3.01868320730299,
          "pitch": 0.36558195454914255,
          "rotation": 3.141592653589793,
          "target": "71-pathway-8-p6"
        },
        {
          "yaw": 2.060543125475908,
          "pitch": 0.026472033843843334,
          "rotation": 5.497787143782138,
          "target": "35-pathway-4-p2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "73-pathway-8-p8",
      "name": "Pathway 8 P8",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.013648458711458034,
        "pitch": 0.20394827366225599,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -3.065739588680678,
          "pitch": 0.43896832635204674,
          "rotation": 9.42477796076938,
          "target": "72-pathway-8-p7"
        },
        {
          "yaw": 0.12796320943127704,
          "pitch": 0.495646763812843,
          "rotation": 0.7853981633974483,
          "target": "74-pathway-8-p9"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "74-pathway-8-p9",
      "name": "Pathway 8 P9",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.00744453235448006,
        "pitch": 0.3283909530122813,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 2.6446485914517837,
          "pitch": 0.37726760460203934,
          "rotation": 8.63937979737193,
          "target": "73-pathway-8-p8"
        },
        {
          "yaw": 0.06391027768022539,
          "pitch": 0.4134301828862803,
          "rotation": 0,
          "target": "75-pathway-8-p10"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "75-pathway-8-p10",
      "name": "Pathway 8 P10",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.08313061129166854,
        "pitch": 0.16246710306923262,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -0.04669129800690541,
          "pitch": 0.28872550759212956,
          "rotation": 0,
          "target": "76-pathway-8-p11"
        },
        {
          "yaw": -2.9657029010671376,
          "pitch": 0.3024954452375326,
          "rotation": 3.141592653589793,
          "target": "74-pathway-8-p9"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "76-pathway-8-p11",
      "name": "Pathway 8 P11",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.12194848957293658,
        "pitch": 0.21189041132325848,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 3.114775938286007,
          "pitch": 0.3784161516370368,
          "rotation": 3.141592653589793,
          "target": "75-pathway-8-p10"
        },
        {
          "yaw": -0.06527930441852092,
          "pitch": 0.3078911142044092,
          "rotation": 0,
          "target": "77-pathway-8-p12"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "77-pathway-8-p12",
      "name": "Pathway 8 P12",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.43856811612163504,
        "pitch": 0.23138720611648012,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 2.647522379342396,
          "pitch": 0.21069749845356256,
          "rotation": 3.141592653589793,
          "target": "76-pathway-8-p11"
        },
        {
          "yaw": -0.4601731761502599,
          "pitch": 0.34767247081176755,
          "rotation": 0,
          "target": "78-maze-exit"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "78-maze-exit",
      "name": "Maze Exit",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.07816758972201576,
        "pitch": 0.18320758431210926,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 2.9676508230032024,
          "pitch": 0.2685297173715231,
          "rotation": 3.141592653589793,
          "target": "77-pathway-8-p12"
        },
        {
          "yaw": 0.08880090051221146,
          "pitch": 0.2834129963756631,
          "rotation": 0,
          "target": "0-queue-entrance"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "SHIPWRECKED 2026",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
