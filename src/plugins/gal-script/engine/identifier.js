// GalGame Engine
// ╦  ┌─┐┬ ┬┌─┐┬─┐ Lzyor Studio
// ║  ┌─┘└┬┘│ │├┬┘ game-gal-1
// ╩═╝└─┘ ┴ └─┘┴└─ 2021-09-24 19:26:30

// 按照作用域逻辑为对象分配唯一编号
// 没有id编号为0，不会为其他对象分配0编号，编号永远时正整数
class Identifier {
    constructor() {
        this._count = 1;
        this._map = new Map();
        this._map.set(undefined, 0);
        this._map.set(false, 0);
        this._map.set(null, 0);
    }

    clear() {
        this._map.clear();
    }

    get(id) {
        if (this._map.has(id)) {
            return this._map.get(id);
        } else {
            let count = this._count++;
            this._map.set(id, count);
            return count;
        }
    }

    remove(id) {
        if (this._map.has(id)) {
            this._map.delete(id);
            return true;
        } else {
            return false;
        }
    }
}

export default Identifier;
