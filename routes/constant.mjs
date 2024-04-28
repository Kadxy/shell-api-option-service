// noinspection SpellCheckingInspection

export const MODELS_MAP = [
    {
        name: "OpenAI",
        models: {
            "Chat": {
                "gpt-3.5-*": [
                    "gpt-3.5-turbo",
                    "gpt-3.5-turbo-0301",
                    "gpt-3.5-turbo-0613",
                    "gpt-3.5-turbo-16k",
                    "gpt-3.5-turbo-16k-0613",
                    "gpt-3.5-turbo-1106",
                    "gpt-3.5-turbo-0125",
                    "gpt-3.5-turbo-instruct"
                ],
                "gpt-4-*": [
                    "gpt-4",
                    "gpt-4-0314",
                    "gpt-4-0613",
                    "gpt-4-32k",
                    "gpt-4-32k-0314",
                    "gpt-4-32k-0613",
                    "gpt-4-1106-preview",
                    "gpt-4-0125-preview",
                    "gpt-4-turbo-preview",
                    "gpt-4-vision-preview"
                ]
            },
            "Embedding": [
                "text-embedding-ada-002",
                "text-embedding-3-small",
                "text-embedding-3-large",
                "text-davinci-003",
                "text-davinci-002",
                "text-curie-001",
                "text-babbage-001",
                "text-ada-001",
                "text-davinci-edit-001",
                "code-davinci-edit-001",
                "davinci-002",
                "babbage-002"
            ],
            "Moderation": [
                "text-moderation-latest",
                " text-moderation-stable",
                "text-moderation-007",
            ],
            "Dall-E": [
                "dall-e-2",
                "dall-e-3"
            ],
            "Tts": [
                "tts-1",
                "tts-1-1106",
                "tts-1-hd",
                "tts-1-hd-1106"
            ],
            "Whisper": [
                "whisper-1"
            ],
            "Plus": [
                "gpt-4-gizmo-*",
                "gpt-4-all"
            ]
        }
    },
    {
        name: "Google",
        models: [
            "search-serper",
            "PaLM-2",
            "gemini-pro",
            "gemini-pro-vision"
        ]
    },
    {
        name: "Anthropic",
        doc_url: "https://docs.anthropic.com/claude/docs/models-overview",
        models: {
            "Claude 1": [
                "claude-instant-1",
                "claude-instant-1.2"
            ],
            "Claude 2": [
                "claude-2",
                "claude-2.1",
                "claude-2.0"
            ],
            "Claude 3": [
                "claude-3-haiku-20240307",
                "claude-3-sonnet-20240229",
                "claude-3-opus-20240229"
            ]
        }
    },
    {
        name: "Baidu",
        doc_url: "https://cloud.baidu.com/doc/WENXINWORKSHOP/s/Nlks5zkzu",
        models: {
            "Chat": [
                "ERNIE-Bot",
                "ERNIE-Bot-turbo",
                "ERNIE-Bot-4",
                "ERNIE-4.0-8K",
                "ERNIE-4.0-8K-Preview",
                "ERNIE-4.0-8K-0104",
                "ERNIE-3.5-8K",
                "ERNIE-3.5-8K-0205",
                "ERNIE-3.5-8K-1222",
                "ERNIE-3.5-4K-0205",
                "ERNIE-3.5-8K-Preview",
                "ERNIE-Speed-8K",
                "ERNIE-Speed-128K",
                "ERNIE-Character-8K-0321",
                "ERNIE-Lite-8K-0922",
                "ERNIE-Lite-8K-0308",
                "ERNIE-Lite-8K-0725",
                "ERNIE-Lite-4K-0704",
                "ERNIE-Lite-4K-0516",
                "ERNIE-Functions-8K-0321",
                "ERNIE-Tiny-8K",
                "ERNIE Speed-AppBuilder",
                "Qianfan-Chinese-Llama-2-7B",
                "Qianfan-Chinese-Llama-2-7B-32K",
                "Qianfan-Chinese-Llama-2-13B-v2",
                "Qianfan-Chinese-Llama-2-13B-v1",
                "Qianfan-Chinese-Llama-2-70B",
                "Qianfan-Llama-2-70B-compressed"
            ],
            "Embeddings": [
                " Embedding-V1"
            ]
        }
    },
    {
        name: "智谱",
        doc_url: "https://open.bigmodel.cn/dev/howuse/model",
        models: {
            "GLM-4": [
                "glm-4",
                "glm-4v",
            ],
            "ChatGLM-Turbo": [
                "glm-3-turbo",
                "chatglm_turbo",
            ],
            "CharGLM-3": [
                "cogview-3",
            ],
            "CogView-3": [
                "cogview-3",
            ],
            "Embedding-2": [
                "embedding-2",
                "text_embedding"
            ],
        }
    },
    {
        name: "Aliyun",
        doc_url: "https://help.aliyun.com/zh/dashscope/product-overview/?spm=a2c4g.11186623.0.0.ab39e0f6skm3UG",
        models: {
            "Chat": [
                "qwen-turbo",
                "qwen-plus",
                "qwen-max",
                "qwen-max-0403",
                "qwen-max-0107",
                "qwen-max-1201",
                "qwen-max-longcontext",
            ],
            "VL": [
                "qwen-vl-plus",
                "qwen-vl-max",
            ],
            "Embdding": [
                "text-embedding-v1"
            ],
            "Audio": [
                "qwen-audio-turbo"
            ]
        }
    },
    {
        name: "iFLYTEK",
        doc_url: "https://xinghuo.xfyun.cn/sparkapi",
        models: {
            "V1": [
                "SparkDesk-v1.1",
            ],
            "V2": [
                "SparkDesk-v2.1",
            ],
            "V3": [
                "SparkDesk-v3.1",
                "SparkDesk-v3.5"
            ],
        }
    },
    {
        name: "360",
        doc_url: "https://ai.360.com/open",
        models: [
            "360GPT_S2_V9",
            "embedding-bert-512-v1",
            "embedding_s1_v1",
            "semantic_similarity_s1_v1"
        ]
    },
    {
        name: "Tencent",
        doc_url: "https://cloud.tencent.com/document/product/1729/97731",
        models: [
            "hunyuan",
            "hunyuan-pro",
            "hunyuan-standard",
            "hunyuan-lite",
            "hunyuan-embedding",
        ]
    },
    {
        name: "Midjourney Proxy",
        models: [
            "midjourney"
        ]
    },
    {
        name: "MiniMax",
        doc_url: "https://www.minimaxi.com/document",
        models: {
            "Text": [//官网的不带 “-chat”
                "abab5.5",
                "abab5.5s",
                "abab6",
                "abab5.5-chat",
                "abab5.5s-chat",
                "abab6-chat"
            ],
            "Sound": [
                "speech-02"
            ]
        }
    },
    {
        name: "Baichuan",
        doc_url: "https://platform.baichuan-ai.com/docs",
        models: [
            "Baichuan-NPC-Turbo",
            "Baichuan-NPC-Lite",
            "Baichuan2-Turbo",
            "Baichuan2-Turbo-192k",
            "Baichuan-Text-Embedding"
        ]
    },
    {
        name: "Moonshot",
        doc_url: "https://platform.moonshot.cn/docs",
        models: [
            "moonshot-v1-8k",
            "moonshot-v1-32k",
            "moonshot-v1-128k"
        ]
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
