// noinspection SpellCheckingInspection
// export const MODELS = [
//     {
//         "title": "OpenAI",
//         "value": "OpenAI",
//         "key": "OpenAI",
//         "children": [
//             {
//                 "title": "chat",
//                 "value": "chat",
//                 "key": "chat",
//                 "children": [
//                     {
//                         "title": "GPT-3.5",
//                         "value": "GPT-3.5",
//                         "key": "GPT-3.5",
//                         "children": [
//                             // {
//                             //     "title": "gpt-3.5-turbo-2",
//                             //     "value": "gpt-3.5-turbo-2",
//                             //     "key": "gpt-3.5-turbo-2"
//                             // },
//                             {
//                                 "title": "gpt-3.5-turbo",
//                                 "value": "gpt-3.5-turbo",
//                                 "key": "gpt-3.5-turbo"
//                             },
//                             {
//                                 "title": "gpt-3.5-turbo-0301",
//                                 "value": "gpt-3.5-turbo-0301",
//                                 "key": "gpt-3.5-turbo-0301"
//                             },
//                             {
//                                 "title": "gpt-3.5-turbo-0613",
//                                 "value": "gpt-3.5-turbo-0613",
//                                 "key": "gpt-3.5-turbo-0613"
//                             },
//                             {
//                                 "title": "gpt-3.5-turbo-16k",
//                                 "value": "gpt-3.5-turbo-16k",
//                                 "key": "gpt-3.5-turbo-16k"
//                             },
//                             {
//                                 "title": "gpt-3.5-turbo-16k-0613",
//                                 "value": "gpt-3.5-turbo-16k-0613",
//                                 "key": "gpt-3.5-turbo-16k-0613"
//                             },
//                             {
//                                 "title": "gpt-3.5-turbo-1106",
//                                 "value": "gpt-3.5-turbo-1106",
//                                 "key": "gpt-3.5-turbo-1106"
//                             },
//                             {
//                                 "title": "gpt-3.5-turbo-0125",
//                                 "value": "gpt-3.5-turbo-0125",
//                                 "key": "gpt-3.5-turbo-0125"
//                             },
//                             {
//                                 "title": "gpt-3.5-turbo-instruct",
//                                 "value": "gpt-3.5-turbo-instruct",
//                                 "key": "gpt-3.5-turbo-instruct"
//                             }
//                         ]
//                     },
//                     {
//                         "title": "GPT-4",
//                         "value": "GPT-4",
//                         "key": "GPT-4",
//                         "children": [
//                             {
//                                 "title": "gpt-4",
//                                 "value": "gpt-4",
//                                 "key": "gpt-4"
//                             },
//                             {
//                                 "title": "gpt-4-gizmo-*",
//                                 "value": "gpt-4-gizmo-*",
//                                 "key": "gpt-4-gizmo-*"
//                             },
//                             {
//                                 "title": "gpt-4-0314",
//                                 "value": "gpt-4-0314",
//                                 "key": "gpt-4-0314"
//                             },
//                             {
//                                 "title": "gpt-4-0613",
//                                 "value": "gpt-4-0613",
//                                 "key": "gpt-4-0613"
//                             },
//                             {
//                                 "title": "gpt-4-32k",
//                                 "value": "gpt-4-32k",
//                                 "key": "gpt-4-32k"
//                             },
//                             {
//                                 "title": "gpt-4-32k-0314",
//                                 "value": "gpt-4-32k-0314",
//                                 "key": "gpt-4-32k-0314"
//                             },
//                             {
//                                 "title": "gpt-4-32k-0613",
//                                 "value": "gpt-4-32k-0613",
//                                 "key": "gpt-4-32k-0613"
//                             },
//                             {
//                                 "title": "gpt-4-1106-preview",
//                                 "value": "gpt-4-1106-preview",
//                                 "key": "gpt-4-1106-preview"
//                             },
//                             {
//                                 "title": "gpt-4-0125-preview",
//                                 "value": "gpt-4-0125-preview",
//                                 "key": "gpt-4-0125-preview"
//                             },
//                             {
//                                 "title": "gpt-4-turbo-preview",
//                                 "value": "gpt-4-turbo-preview",
//                                 "key": "gpt-4-turbo-preview"
//                             },
//                             {
//                                 "title": "gpt-4-vision-preview",
//                                 "value": "gpt-4-vision-preview",
//                                 "key": "gpt-4-vision-preview"
//                             }
//                         ]
//                     }
//                 ]
//             },
//             {
//                 "title": "embedding",
//                 "value": "embedding",
//                 "key": "embedding",
//                 "children": [
//                     {
//                         "title": "text-embedding-ada-002",
//                         "value": "text-embedding-ada-002",
//                         "key": "text-embedding-ada-002"
//                     },
//                     {
//                         "title": "text-embedding-3-small",
//                         "value": "text-embedding-3-small",
//                         "key": "text-embedding-3-small"
//                     },
//                     {
//                         "title": "text-embedding-3-large",
//                         "value": "text-embedding-3-large",
//                         "key": "text-embedding-3-large"
//                     },
//                     {
//                         "title": "text-davinci-003",
//                         "value": "text-davinci-003",
//                         "key": "text-davinci-003"
//                     },
//                     {
//                         "title": "text-davinci-002",
//                         "value": "text-davinci-002",
//                         "key": "text-davinci-002"
//                     },
//                     {
//                         "title": "text-curie-001",
//                         "value": "text-curie-001",
//                         "key": "text-curie-001"
//                     },
//                     {
//                         "title": "text-babbage-001",
//                         "value": "text-babbage-001",
//                         "key": "text-babbage-001"
//                     },
//                     {
//                         "title": "text-ada-001",
//                         "value": "text-ada-001",
//                         "key": "text-ada-001"
//                     },
//                     {
//                         "title": "text-moderation-latest",
//                         "value": "text-moderation-latest",
//                         "key": "text-moderation-latest"
//                     },
//                     {
//                         "title": "text-moderation-stable",
//                         "value": "text-moderation-stable",
//                         "key": "text-moderation-stable"
//                     },
//                     {
//                         "title": "text-davinci-edit-001",
//                         "value": "text-davinci-edit-001",
//                         "key": "text-davinci-edit-001"
//                     },
//                     {
//                         "title": "code-davinci-edit-001",
//                         "value": "code-davinci-edit-001",
//                         "key": "code-davinci-edit-001"
//                     },
//                     {
//                         "title": "davinci-002",
//                         "value": "davinci-002",
//                         "key": "davinci-002"
//                     },
//                     {
//                         "title": "babbage-002",
//                         "value": "babbage-002",
//                         "key": "babbage-002"
//                     }
//                 ]
//             },
//             {
//                 "title": "dall-e",
//                 "value": "dall-e",
//                 "key": "dall-e",
//                 "children": [
//                     {
//                         "title": "dall-e-2",
//                         "value": "dall-e-2",
//                         "key": "dall-e-2"
//                     },
//                     {
//                         "title": "dall-e-3",
//                         "value": "dall-e-3",
//                         "key": "dall-e-3"
//                     }
//                 ]
//             },
//             {
//                 "title": "tts",
//                 "value": "tts",
//                 "key": "tts",
//                 "children": [
//                     {
//                         "title": "tts-1",
//                         "value": "tts-1",
//                         "key": "tts-1"
//                     },
//                     {
//                         "title": "tts-1-1106",
//                         "value": "tts-1-1106",
//                         "key": "tts-1-1106"
//                     },
//                     {
//                         "title": "tts-1-hd",
//                         "value": "tts-1-hd",
//                         "key": "tts-1-hd"
//                     },
//                     {
//                         "title": "tts-1-hd-1106",
//                         "value": "tts-1-hd-1106",
//                         "key": "tts-1-hd-1106"
//                     }
//                 ]
//             },
//             {
//                 "title": "whisper",
//                 "value": "whisper",
//                 "key": "whisper",
//                 "children": [
//                     {
//                         "title": "whisper-1",
//                         "value": "whisper-1",
//                         "key": "whisper-1"
//                     }
//                 ]
//             }
//         ]
//     },
//     {
//         "title": "Google",
//         "value": "Google",
//         "key": "Google",
//         "children": [
//             {
//                 "title": "search-serper",
//                 "value": "search-serper",
//                 "key": "search-serper"
//             },
//             {
//                 "title": "PaLM-2",
//                 "value": "PaLM-2",
//                 "key": "PaLM-2"
//             },
//             {
//                 "title": "gemini-pro",
//                 "value": "gemini-pro",
//                 "key": "gemini-pro"
//             },
//             {
//                 "title": "gemini-pro-vision",
//                 "value": "gemini-pro-vision",
//                 "key": "gemini-pro-vision"
//             }
//         ]
//     },
//     {
//         "title": "Anthropic",
//         "value": "Anthropic",
//         "key": "Anthropic",
//         "children": [
//             {
//                 "title": "claude-instant-1",
//                 "value": "claude-instant-1",
//                 "key": "claude-instant-1"
//             },
//             {
//                 "title": "claude-2",
//                 "value": "claude-2",
//                 "key": "claude-2"
//             },
//             {
//                 "title": "claude-2.1",
//                 "value": "claude-2.1",
//                 "key": "claude-2.1"
//             },
//             {
//                 "title": "claude-2.0",
//                 "value": "claude-2.0",
//                 "key": "claude-2.0"
//             },
//             {
//                 "title": "claude-3-haiku-20240307",
//                 "value": "claude-3-haiku-20240307",
//                 "key": "claude-3-haiku-20240307"
//             },
//             {
//                 "title": "claude-3-sonnet-20240229",
//                 "value": "claude-3-sonnet-20240229",
//                 "key": "claude-3-sonnet-20240229"
//             },
//             {
//                 "title": "claude-3-opus-20240229",
//                 "value": "claude-3-opus-20240229",
//                 "key": "claude-3-opus-20240229"
//             }
//         ]
//     },
//     {
//         "title": "百度",
//         "value": "百度",
//         "key": "百度",
//         "children": [
//             {
//                 "title": "ERNIE-Bot",
//                 "value": "ERNIE-Bot",
//                 "key": "ERNIE-Bot"
//             },
//             {
//                 "title": "ERNIE-Bot-turbo",
//                 "value": "ERNIE-Bot-turbo",
//                 "key": "ERNIE-Bot-turbo"
//             },
//             {
//                 "title": "ERNIE-Bot-4",
//                 "value": "ERNIE-Bot-4",
//                 "key": "ERNIE-Bot-4"
//             },
//             {
//                 "title": "Embedding-V1",
//                 "value": "Embedding-V1",
//                 "key": "Embedding-V1"
//             }
//         ]
//     },
//     {
//         "title": "智谱",
//         "value": "智谱",
//         "key": "智谱",
//         "children": [
//             {
//                 "title": "chatglm_turbo",
//                 "value": "chatglm_turbo",
//                 "key": "chatglm_turbo"
//             },
//             {
//                 "title": "chatglm_pro",
//                 "value": "chatglm_pro",
//                 "key": "chatglm_pro"
//             },
//             {
//                 "title": "chatglm_std",
//                 "value": "chatglm_std",
//                 "key": "chatglm_std"
//             },
//             {
//                 "title": "chatglm_lite",
//                 "value": "chatglm_lite",
//                 "key": "chatglm_lite"
//             }
//         ]
//     },
//     {
//         "title": "阿里",
//         "value": "阿里",
//         "key": "阿里",
//         "children": [
//             {
//                 "title": "qwen-turbo",
//                 "value": "qwen-turbo",
//                 "key": "qwen-turbo"
//             },
//             {
//                 "title": "qwen-plus",
//                 "value": "qwen-plus",
//                 "key": "qwen-plus"
//             },
//             {
//                 "title": "qwen-max",
//                 "value": "qwen-max",
//                 "key": "qwen-max"
//             },
//             {
//                 "title": "qwen-max-longcontext",
//                 "value": "qwen-max-longcontext",
//                 "key": "qwen-max-longcontext"
//             },
//             {
//                 "title": "text-embedding-v1",
//                 "value": "text-embedding-v1",
//                 "key": "text-embedding-v1"
//             }
//         ]
//     },
//     {
//         "title": "讯飞",
//         "value": "讯飞",
//         "key": "讯飞",
//         "children": [
//             {
//                 "title": "SparkDesk-v1.1",
//                 "value": "SparkDesk-v1.1",
//                 "key": "SparkDesk-v1.1"
//             }, {
//                 "title": "SparkDesk-v2.1",
//                 "value": "SparkDesk-v2.1",
//                 "key": "SparkDesk-v2.1"
//             }, {
//                 "title": "SparkDesk-v3.1",
//                 "value": "SparkDesk-v3.1",
//                 "key": "SparkDesk-v3.1"
//             }, {
//                 "title": "SparkDesk-v3.5",
//                 "value": "SparkDesk-v3.5",
//                 "key": "SparkDesk-v3.5"
//             }
//         ]
//     },
//     {
//         "title": "360",
//         "value": "360",
//         "key": "360",
//         "children": [
//             {
//                 "title": "360GPT_S2_V9",
//                 "value": "360GPT_S2_V9",
//                 "key": "360GPT_S2_V9"
//             },
//             {
//                 "title": "embedding-bert-512-v1",
//                 "value": "embedding-bert-512-v1",
//                 "key": "embedding-bert-512-v1"
//             },
//             {
//                 "title": "embedding_s1_v1",
//                 "value": "embedding_s1_v1",
//                 "key": "embedding_s1_v1"
//             },
//             {
//                 "title": "semantic_similarity_s1_v1",
//                 "value": "semantic_similarity_s1_v1",
//                 "key": "semantic_similarity_s1_v1"
//             }
//         ]
//     },
//     {
//         "title": "腾讯",
//         "value": "腾讯",
//         "key": "腾讯",
//         "children": [
//             {
//                 "title": "hunyuan",
//                 "value": "hunyuan",
//                 "key": "hunyuan"
//             }
//         ]
//     },
//     {
//         "title": "MJ",
//         "value": "MJ",
//         "key": "MJ",
//         "children": [
//             {
//                 "title": "midjourney",
//                 "value": "midjourney",
//                 "key": "midjourney"
//             }
//         ]
//     },
//     {
//         "title": "minimax",
//         "value": "minimax",
//         "key": "minimax",
//         "children": [
//             {
//                 "title": "abab5.5s-chat",
//                 "value": "abab5.5s-chat",
//                 "key": "abab5.5s-chat"
//             },
//             {
//                 "title": "abab5.5-chat",
//                 "value": "abab5.5-chat",
//                 "key": "abab5.5-chat"
//             },
//             {
//                 "title": "abab6-chat",
//                 "value": "abab6-chat",
//                 "key": "abab6-chat"
//             }
//         ]
//     },
//     {
//         "title": "百川",
//         "value": "百川",
//         "key": "百川",
//         "children": [
//             {
//                 "title": "Baichuan2-Turbo",
//                 "value": "Baichuan2-Turbo",
//                 "key": "Baichuan2-Turbo"
//             },
//             {
//                 "title": "Baichuan2-Turbo-192k",
//                 "value": "Baichuan2-Turbo-192k",
//                 "key": "Baichuan2-Turbo-192k"
//             },
//             {
//                 "title": "Baichuan-Text-Embedding",
//                 "value": "Baichuan-Text-Embedding",
//                 "key": "Baichuan-Text-Embedding"
//             }
//         ]
//     },
//     {
//         "title": "moonshot",
//         "value": "moonshot",
//         "key": "moonshot",
//         "children": [
//             {
//                 "title": "moonshot-v1-8k",
//                 "value": "moonshot-v1-8k",
//                 "key": "moonshot-v1-8k"
//             },
//             {
//                 "title": "moonshot-v1-32k",
//                 "value": "moonshot-v1-32k",
//                 "key": "moonshot-v1-32k"
//             },
//             {
//                 "title": "moonshot-v1-128k",
//                 "value": "moonshot-v1-128k",
//                 "key": "moonshot-v1-128k"
//             }
//         ]
//     }
// ]

export const MODELS_MAP = [
    {
        name: "OpenAI",
        models: {
            "chat": {
                "GPT-3.5": ["gpt-3.5-turbo", "gpt-3.5-turbo-0301", "gpt-3.5-turbo-0613", "gpt-3.5-turbo-16k", "gpt-3.5-turbo-16k-0613", "gpt-3.5-turbo-1106", "gpt-3.5-turbo-0125", "gpt-3.5-turbo-instruct"],
                "GPT-4": ["gpt-4", "gpt-4-0314", "gpt-4-0613", "gpt-4-32k", "gpt-4-32k-0314", "gpt-4-32k-0613", "gpt-4-1106-preview", "gpt-4-0125-preview", "gpt-4-turbo-preview", "gpt-4-vision-preview"]
            },
            "embedding": ["text-embedding-ada-002", "text-embedding-3-small", "text-embedding-3-large", "text-davinci-003", "text-davinci-002", "text-curie-001", "text-babbage-001", "text-ada-001", "text-moderation-latest", "text-moderation-stable", "text-davinci-edit-001", "code-davinci-edit-001", "davinci-002", "babbage-002"],
            "dall-e": ["dall-e-2", "dall-e-3"],
            "tts": ["tts-1", "tts-1-1106", "tts-1-hd", "tts-1-hd-1106"],
            "whisper": ["whisper-1"],
            "Plus": ["gpt-4-gizmo-*", "gpt-4-all"]
        }
    },
    {
        name: "Google",
        models: ["search-serper", "PaLM-2", "gemini-pro", "gemini-pro-vision"]
    },
    {
        name: "Anthropic",
        models: {
            "claude1": ["claude-instant-1"],
            "claude2": ["claude-2", "claude-2.1", "claude-2.0"],
            "claude3": ["claude-3-haiku-20240307", "claude-3-sonnet-20240229", "claude-3-opus-20240229"]
        }
    },
    {
        name: "百度",
        models: ["ERNIE-Bot", "ERNIE-Bot-turbo", "ERNIE-Bot-4", "Embedding-V1"]
    },
    {
        name: "智谱",
        models: ["chatglm_turbo", "chatglm_pro", "chatglm_std", "chatglm_lite"]
    },
    {
        name: "阿里",
        models: ["qwen-turbo", "qwen-plus", "qwen-max", "qwen-max-longcontext", "text-embedding-v1"]
    },
    {
        name: "讯飞",
        models: ["SparkDesk-v1.1", "SparkDesk-v2.1", "SparkDesk-v3.1", "SparkDesk-v3.5"]
    },
    {
        name: "360",
        models: ["360GPT_S2_V9", "embedding-bert-512-v1", "embedding_s1_v1", "semantic_similarity_s1_v1"]
    },
    {
        name: "腾讯",
        models: ["hunyuan"]
    },
    {
        name: "MJ",
        models: ["midjourney"]
    },
    {
        name: "minimax",
        models: ["abab5.5s-chat", "abab5.5-chat", "abab6-chat"]
    },
    {
        name: "百川",
        models: ["Baichuan2-Turbo", "Baichuan2-Turbo-192k", "Baichuan-Text-Embedding"]
    },
    {
        name: "moonshot",
        models: ["moonshot-v1-8k", "moonshot-v1-32k", "moonshot-v1-128k"]
    }
];

export const convertModelsMapToModels = (modelsMap) => {
    const convertToModels = (obj) => {
        if (Array.isArray(obj)) {
            return obj.map((item) => {
                if (typeof item === 'string') {
                    return {
                        title: item,
                        value: item,
                        key: item,
                    };
                } else {
                    return convertToModels(item);
                }
            });
        } else {
            return Object.entries(obj).map(([key, value]) => {
                return {
                    title: key,
                    value: key,
                    key: key,
                    children: convertToModels(value),
                };
            });
        }
    };

    return modelsMap.map((provider) => {
        return {
            title: provider.name,
            value: provider.name,
            key: provider.name,
            children: convertToModels(provider.models),
        };
    });
};

export const MODELS = convertModelsMapToModels(MODELS_MAP);
