import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="Header">
      <img
        className="logo"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJsAAACUCAMAAACz6atrAAAAkFBMVEX+UQX/////08r+URP+SQD+TgD/7+z+g2P+XSr+RgD+QgD+VxP//fz+2M3/4tv+PAD+gFr9dUr/9/T/0MT+cUf/3db+k3n+fFn+tqb+vKv+xbX+VB//7eb+ybr+n4b+wK/+bkv+aTn+qJX/wrj+p47+s5z+r5/+hWr+i2v+mYb+ZUH9Zi/+bkD+XyP9kHH+WzECN6o5AAAEyUlEQVR4nO3b23aqOhQG4NAmICmYAlY8oeJ2tdZa+/5vt7V2WZUIMzOJMvbOf9FL+o1ATjOReO0NuTegJs6Gy1/bS9CevFzYHmh78nBpe2SkHWGPzoaJs+HibLg4Gy7Ohouz4eJsuDgbLs6Gy//LxljIfxJSrUeZtTHGRVhuF8N/dhku+gkTHO8zaWPheL6Mo8g7Joq6f/KvkN7bxkTnNT5xHdMd5AKlM2VjtCxSCezQfHFAETpDNt4ZyZrsN1kglB9rxEb5dFIr27fdcKzadCZsYZk1yfaZvHG1Jxuw8cSH0DwvXarh9G3hFCbbp1B6tq6NiWV9J9DA6drCVwXZLi8KT9e0CYUXesgIPofp2cKVKs3zhuImNta7OhXUZMVvYGO8i6B5fg/4D3RsfImh7eYvYMNp2NgcOOZWEoS2bWFRL/CLa/YuAf0LvI2WDa2z4m/Xuso7qOHwNtEwwUeEdq71FdgIjLaxTcPXFj2xqzYvgayX0LbGyarWlkEGYKyNPcY6Nh/SG9C2soFWb4v6gN6AtdGtls0bAsZfrE2M9GzxuPm/oG2NU2m9LV1bszHSuAKpt3nPzaMI1rbRtQXWbDRv3CXU26K5tXdKt5q2EbNmC/t6tgzQTe9i84HFEau2cdUWdWerObW6tqQriI2+FUW2T1HMBq/Lbf7BhBAU8Klp2QD9dDcIHiu/f8u/t6iHsLJ5fNuI8HhBhh2iIrM5L3jx+3YVBM95niS9Tfnx+flEd29UoThtbz79bcDfpJN4OM3XwAIr2tawyaqLX8A2gVibStVNki0Eh1739rRsE8jWHm3rNFaf65LabDdCZzq2rs19FgnfdWx/bL7T3UvFVmr22Vjd1xPRtEGtSReyRNKp1eR428JyrYYxdE9NQeUQrfrbAmt7gJWj/6N1S8KRQ9wEuBLRqpN3cDZYT9A8X2gqXcrjA8oN+jbAylwS8MGM3rkMxTTcp+117yGNtXJJZrc5z8J8cWl+o3NAwtaqp20j6Emb/tkuVV2bf8BvO2if14ut0uwAPz01cpegnBZxHGdZFp9GvhBIAWU3g7bdSBJKIqQT2iv8azN4H+k7h+rC/g8JA1mzPd3yDsZPKP1a93q9JEm+/24eCX2W2KYqzWbGxkR/NDkbTPpUZoMtxc3awsq3NZDZQAdFhm2srAwjUlus9EYN2VilqCS1zRUvmZl5p5U+OZTYBmpv1FQ/5Zd7VYnNL5XfhxEbm19M+RLbVvFrM3ffctBk6yrTTNmYOO+qo1CcX6NKc/WLqqbmrIvDkDTYnH+CA/VmM3f3mF4UgM93Oan6DVqDNjau23MpzgiGbYTXrICLu97ZPn1SJanaHG/eRujVc3K1pZENGxFX7upld/+NwNV7QJHC1sqajdDLqevwRhW2VvZsREhKmbHq0aQlG+GVvup/Id+ocRut3Pjt4/qoBRvh/XPaDE8z//us88rSpKPxMOM2tj6tNuSYedSajfCTzcMAO3xYspHfSkis+QrM247XaaIOeviwZSM0OSzlkFO8VdvPr0Eg1z1vb/uu7U+0n2Pnt7GMLwZ6vz21Z9vhFH/DdkObkTgbLs6Gi7Ph4my4OBsuzoaLs+HibLhIbW1J1dZpTy5tkd+eRBe2NsbZcGmz7V8qjmdvu6IsRwAAAABJRU5ErkJggg=="
      ></img>
      <div>
        <ul className="Header-list">
          <li>First item</li>
          <li>Second item</li>
          <li>Third item</li>
        </ul>
      </div>
    </div>
  );
};

const resData = [
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "607314",
          name: "Namaste",
          cloudinaryImageId: "ixlexdhrxpu2ir9cc6xr",
          locality: "Marenahalli Main Road",
          areaName: "Vijayanagar",
          costForTwo: "₹100 for two",
          cuisines: ["South Indian", "Chinese", "Thalis"],
          avgRating: 4.3,
          veg: true,
          parentId: "366271",
          avgRatingString: "4.3",
          totalRatingsString: "14K+",
          promoted: true,
          adTrackingId:
            "cid=3e26e507-9a31-46cc-bcbe-f3847dd8f180~p=0~adgrpid=3e26e507-9a31-46cc-bcbe-f3847dd8f180#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=607314~plpr=COLLECTION~eid=595a3c3f-d90c-41fb-8735-2e78f57b4348~srvts=1766470475502~collid=80440",
          sla: {
            deliveryTime: 27,
            lastMileTravel: 3.5,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "3.5 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-12-24 01:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "Rxawards/_CATEGORY-South%20Indian.png",
                description: "Delivery!",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      description: "Delivery!",
                      imageId: "Rxawards/_CATEGORY-South%20Indian.png",
                    },
                  },
                ],\
              },
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹200 OFF",
            subHeader: "ABOVE ₹499",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "3e26e507-9a31-46cc-bcbe-f3847dd8f180",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=607314&source=collection&query=Idli",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "47385",
          name: "Priyadarshini Grand",
          cloudinaryImageId: "koxbac0vptcgx8qqow2z",
          locality: "Basaveshwara Nagar",
          areaName: "Basaveshwara Nagar",
          costForTwo: "₹200 for two",
          cuisines: [
            "South Indian",
            "North Indian",
            "Chaat",
            "Chinese",
            "Beverages",
          ],
          avgRating: 4.7,
          veg: true,
          parentId: "9727",
          avgRatingString: "4.7",
          totalRatingsString: "157K+",
          sla: {
            deliveryTime: 17,
            lastMileTravel: 1,
            serviceability: "SERVICEABLE",
            slaString: "15-20 mins",
            lastMileTravelString: "1.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-12-23 22:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "android/static-assets/icons/big_rx.png",
                description: "bolt!",
              },
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "android/static-assets/icons/big_rx.png",
                      description: "bolt!",
                    },
                  },
                  {
                    attributes: {
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                      description: "pureveg",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "20% OFF",
            subHeader: "UPTO ₹50",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.1",
              ratingCount: "17K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=47385&source=collection&query=Idli",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "812598",
          name: "Cafe Amudham",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/5/1/0f2967df-1a30-46d2-a264-14c2d0d05e1b_0652be60-690b-4240-8dd8-62fce1b8c16b.jpg",
          locality: "Majestic",
          areaName: "Majestic",
          costForTwo: "₹246 for two",
          cuisines: ["South Indian", "Snacks"],
          avgRating: 4.6,
          parentId: "396620",
          avgRatingString: "4.6",
          totalRatingsString: "4.1K+",
          promoted: true,
          adTrackingId:
            "cid=a993176d-95bd-4444-ac8c-7c1c22982c2b~p=2~adgrpid=a993176d-95bd-4444-ac8c-7c1c22982c2b#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=812598~plpr=COLLECTION~eid=069a52fd-a3ad-4341-b1c8-80cac679958b~srvts=1766470475502~collid=80440",
          sla: {
            deliveryTime: 47,
            lastMileTravel: 6.7,
            serviceability: "SERVICEABLE",
            slaString: "45-50 mins",
            lastMileTravelString: "6.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-12-23 23:59:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                      description: "pureveg",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹100 OFF",
            subHeader: "ABOVE ₹549",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.4",
              ratingCount: "913",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "a993176d-95bd-4444-ac8c-7c1c22982c2b",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=812598&source=collection&query=Idli",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "781328",
          name: "Millet Express",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/3/4/2b4de1e2-377a-40cf-bee8-5d2bc0d5d398_0928dd1f-f5d9-47e8-b29f-1369503b53d8.jpg",
          locality: "Dr Rajkumar Road",
          areaName: "Rajajinagar",
          costForTwo: "₹200 for two",
          cuisines: ["Healthy Food", "South Indian"],
          avgRating: 4.2,
          veg: true,
          parentId: "10639",
          avgRatingString: "4.2",
          totalRatingsString: "1.9K+",
          promoted: true,
          adTrackingId:
            "cid=3bc30142-4575-438c-a594-e9f3f467f83f~p=3~adgrpid=3bc30142-4575-438c-a594-e9f3f467f83f#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=781328~plpr=COLLECTION~eid=186096fe-329d-4ec8-9218-0fba947a5a84~srvts=1766470475502~collid=80440",
          sla: {
            deliveryTime: 16,
            lastMileTravel: 0.5,
            serviceability: "SERVICEABLE",
            slaString: "15-20 mins",
            lastMileTravelString: "0.5 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-12-24 00:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "android/static-assets/icons/big_rx.png",
                description: "bolt!",
              },
              {
                imageId: "High%20Protein/rx%20tag%205.png",
                description: "High Protein",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "android/static-assets/icons/big_rx.png",
                      description: "bolt!",
                    },
                  },
                  {
                    attributes: {
                      imageId: "High%20Protein/rx%20tag%205.png",
                      description: "High Protein",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "50% OFF",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "3bc30142-4575-438c-a594-e9f3f467f83f",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=781328&source=collection&query=Idli",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "673183",
          name: "The Rameshwaram Cafe",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/3/24/cde06084-1a4f-4c50-a9ca-c2209337e316_6d2e959d-776f-4174-acb1-2c9bab44c125.jpg",
          locality: "Dr Rajkumar Road",
          areaName: "Malleshwaram",
          costForTwo: "₹250 for two",
          cuisines: ["South Indian", "Indian", "Snacks", "Desserts"],
          avgRating: 4.6,
          veg: true,
          parentId: "384316",
          avgRatingString: "4.6",
          totalRatingsString: "28K+",
          sla: {
            deliveryTime: 36,
            lastMileTravel: 4,
            serviceability: "SERVICEABLE",
            slaString: "35-45 mins",
            lastMileTravelString: "4.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-12-23 23:59:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "Rxawards/_CATEGORY-South%20Indian.png",
                description: "Delivery!",
              },
            ],
          },
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "Rxawards/_CATEGORY-South%20Indian.png",
                      description: "Delivery!",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=673183&source=collection&query=Idli",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "42739",
          name: "Hotel Udupi Ruchi",
          cloudinaryImageId: "k3ij6deae11jxf1qtwwv",
          locality: "Rajajinagar",
          areaName: "Rajajinagar",
          costForTwo: "₹300 for two",
          cuisines: ["South Indian", "Chinese", "Desserts", "North Indian"],
          avgRating: 4.4,
          veg: true,
          parentId: "21542",
          avgRatingString: "4.4",
          totalRatingsString: "16K+",
          promoted: true,
          adTrackingId:
            "cid=3e884b5c-8413-4d98-a2f2-a6acc4d3766b~p=5~adgrpid=3e884b5c-8413-4d98-a2f2-a6acc4d3766b#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=42739~plpr=COLLECTION~eid=dea6009a-f36f-4301-9d13-9a0916cc6dd1~srvts=1766470475502~collid=80440",
          sla: {
            deliveryTime: 29,
            lastMileTravel: 2.8,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "2.8 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-12-23 22:20:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                      description: "pureveg",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹49",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "3.9",
              ratingCount: "1.3K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "3e884b5c-8413-4d98-a2f2-a6acc4d3766b",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=42739&source=collection&query=Idli",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "949550",
          name: "The Meenakshi Coffee Bar",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/7/28/93108b93-f4df-4112-8fee-ea594f1a7bcc_e397cc9b-c539-45ac-b022-722f984577f2.jpeg",
          locality: "2O TH CROSS ROAD",
          areaName: "Basaveshwaranagar",
          costForTwo: "₹250 for two",
          cuisines: [
            "South Indian",
            "Sweets",
            "Snacks",
            "Home Food",
            "Healthy Food",
            "Navratri Special",
            "Fast Food",
            "Cafe",
          ],
          avgRating: 4.5,
          veg: true,
          parentId: "556092",
          avgRatingString: "4.5",
          totalRatingsString: "1.9K+",
          sla: {
            deliveryTime: 25,
            lastMileTravel: 2.9,
            serviceability: "SERVICEABLE",
            slaString: "20-25 mins",
            lastMileTravelString: "2.9 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-12-24 01:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                      description: "pureveg",
                    },
                  },
                ],
              },
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹60",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=949550&source=collection&query=Idli",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "12811",
          name: "A2B - Adyar Ananda Bhavan",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/15/403e116d-31ec-45db-a296-2541a7278ea5_12811.JPG",
          locality: "Sampige Road",
          areaName: "Malleshwaram",
          costForTwo: "₹300 for two",
          cuisines: ["South Indian", "Sweets", "Chinese"],
          avgRating: 4.5,
          veg: true,
          parentId: "22",
          avgRatingString: "4.5",
          totalRatingsString: "38K+",
          promoted: true,
          adTrackingId:
            "cid=439a8685-26ab-4dac-90bc-4d8ce09908cb~p=6~adgrpid=439a8685-26ab-4dac-90bc-4d8ce09908cb#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=12811~plpr=COLLECTION~eid=da745abb-d129-43f7-9931-29e6c99e1bcb~srvts=1766470475502~collid=80440",
          sla: {
            deliveryTime: 45,
            lastMileTravel: 5.7,
            serviceability: "SERVICEABLE",
            slaString: "40-50 mins",
            lastMileTravelString: "5.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-12-23 22:30:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "Rxawards/_CATEGORY-South%20Indian.png",
                description: "Delivery!",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "Rxawards/_CATEGORY-South%20Indian.png",
                      description: "Delivery!",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹139",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "439a8685-26ab-4dac-90bc-4d8ce09908cb",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=12811&source=collection&query=Idli",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "33094",
          name: "Sai Prasadam",
          cloudinaryImageId: "c9avtmayfq2xkak5avrh",
          locality: "Vijay Nagar",
          areaName: "Vijayanagar",
          costForTwo: "₹250 for two",
          cuisines: ["South Indian", "Jain", "Chinese"],
          avgRating: 4.3,
          veg: true,
          parentId: "175359",
          avgRatingString: "4.3",
          totalRatingsString: "54K+",
          sla: {
            deliveryTime: 27,
            lastMileTravel: 4,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "4.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-12-23 22:30:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                      description: "pureveg",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹29",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.0",
              ratingCount: "2.5K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=33094&source=collection&query=Idli",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
];
const RestroCard = ({ resData }) => {
  console.log(resData);
  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
    resData.card.card.info;
  return (
    <div className="restro-card">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        className="restro-img"
        alt="restro"
      />
      <h2>{name}</h2>
      <p>{costForTwo}</p>
      <p>Delivery Time: {sla.slaString}</p>
      <p>Rating: {avgRating}</p>
      <p>{cuisines.join(", ")}</p>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="restro-list">
        {resData.map((restaurant) => {
          return (
            <RestroCard
              key={restaurant.card.card.info.id}
              resData={restaurant}
            />
          );
        })}
      </div>
    </div>
  );
};

const Applayout = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout></Applayout>);
